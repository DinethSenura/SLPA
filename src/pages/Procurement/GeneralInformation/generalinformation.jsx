import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';

// Full login URL for fetching token
const LOGIN_URL = 'https://www.slpa.lk/WEBAPI/V1/Auth/Login';
const USERNAME = 'TEST';
const PASSWORD = '123';

// API URL for fetching data
const DATA_URL = 'https://www.slpa.lk/WEBAPI/V1/Articles/get_article_info';

// Component that handles fetching the token
const ApiToken = ({ setToken }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fullResponse, setFullResponse] = useState(null);

  const data = {}; // Data for the API request

  // Memoize the loginAndGetToken function using useCallback
  const loginAndGetToken = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.post(LOGIN_URL, data, {
        headers: {
          'Content-Type': 'application/json',
          'Username': USERNAME,
          'Password': PASSWORD,
        },
      });

      console.log('Full Login Response:', response);
      setFullResponse(response);

      if (response.data.Token) {
        localStorage.setItem('authToken', response.data.Token); // Store token in localStorage
        setToken(response.data.Token); // Set the token in the parent component
        console.log('Token saved to localStorage:', response.data.Token); // Debugging
      } else {
        setError('Token not found in response: ' + JSON.stringify(response.data));
      }
    } catch (err) {
      console.error('Login Error:', err);
      if (err.response) {
        setError(`Authentication failed (${err.response.status}): ${err.response.data?.message || 'Unknown error'}`);
        setFullResponse(err.response);
      } else {
        setError('Authentication failed: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  }, [data, setToken]);

  useEffect(() => {
    loginAndGetToken(); // Fetch the token when the component mounts
  }, [loginAndGetToken]);

  if (loading) {
    return <p>Logging in and fetching token...</p>;
  }

  if (error) {
    return (
      <div style={{ color: 'red', margin: '20px', padding: '15px', border: '1px solid #ffcccc', backgroundColor: '#fff0f0' }}>
        <h3>Error</h3>
        <p>{error}</p>
        {fullResponse && (
          <div style={{ marginTop: '15px' }}>
            <h4>Full Response:</h4>
            <pre
              style={{
                wordBreak: 'break-all',
                whiteSpace: 'pre-wrap',
                backgroundColor: '#f5f5f5',
                padding: '10px',
                borderRadius: '4px',
              }}
            >
              {JSON.stringify(fullResponse.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h3>Authentication Successful</h3>
      <p>Token has been fetched and saved successfully.</p>
    </div>
  );
};

// Component to fetch data using the token
const FetchDataPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem('authToken') || ''); // Initialize with token from localStorage

  const requestData = useMemo(() => ({
    data: [
      {
        article_menu: 'Local-Purchases-1',
        article_code: 'TWVjaGFuaWNhbCBFcXVpcG1lbnQ=',
        article_content: 'NULL',
      },
    ],
  }), []); // Memoize requestData to avoid unnecessary re-renders

  // Log and display the token to confirm it's being passed correctly
  console.log('Sending Token:', token); // Ensure token is available before making the request

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setError('No token available. Please log in to proceed.');
        return; // If no token, don't make the request
      }

      setLoading(true);
      try {
        const response = await axios.post(DATA_URL, requestData, {
          headers: {
           // Authorization: 'Bearer ${token}', // Pass token in the Authorization header
            Authorization: token, // Pass token in the Authorization header
            
            'Content-Type': 'application/json',
          },
        });

        setData(response.data);  // Save fetched data to state
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setError('Authorization failed. Please login again. '+token);
        } else {
          setError('Failed to fetch data: ' + err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Make the API request
  }, [token, requestData]); // Re-run effect when token or requestData changes

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Fetched Data:</h2>
      {data ? (
        <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        <p>No data found.</p>
      )}

      {/* Token component to fetch token */}
      <ApiToken setToken={setToken} /> {/* Pass setToken as prop to update token */}
    </div>
  );
};

export default FetchDataPage;