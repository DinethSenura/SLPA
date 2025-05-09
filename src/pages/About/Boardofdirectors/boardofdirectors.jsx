import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import AboutBanner from "../../../components/AboutBanner/Aboutbanner";
import '../Boardofdirectors/boardofdirectors.css'

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

  // Memoize the 'data' object to prevent unnecessary re-renders
  const data = useMemo(() => {
    return {}; // Data for the API request
  }, []); // Only recreate this object when required (currently it's static)

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
        console.log('Token saved to localStorage:', response.data.Token);
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
  }, [setToken, data]); // Now 'data' is stable due to useMemo, so it's safe to use here

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
            <pre style={{ wordBreak: 'break-all', whiteSpace: 'pre-wrap', backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
              {JSON.stringify(fullResponse.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  }

  return <div>{/* Empty placeholder for the token component */}</div>;
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
        article_menu: 'Board Of Directors',
        article_code: 'Qm9hcmQgT2YgRGlyZWN0b3Jz',
        article_content: 'NULL',
      },
    ],
  }), []); // Memoize requestData to avoid unnecessary re-renders

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
            Authorization: token, // Pass token in the Authorization header
            'Content-Type': 'application/json',
          },
        });

        console.log('Fetched API Data:', response.data);
        setData(response.data); // Save fetched data to state
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setError('Authorization failed. Please login again.');
        } else {
          setError('Failed to fetch data: ' + err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, requestData]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      {data && data.status && data.data && data.data.article_info ? (
        <div>
          <div className="header-section">
          {data.data.article_info.image && (
              <img
                src={data.data.article_info.image}
                alt={data.data.article_info.title}
                style={{ width: '100%', maxWidth: '400px', borderRadius: '6px', marginBottom: '10px' }}
              />
            )}
        <h1>ANNUAL REPORTS</h1>
        <p className="path">
          {/* <Link to="/Home">HOME</Link> */}
          <span></span>HOME
          <span>&gt;</span>ABOUT
          <span>&gt;</span>ANNUAL REPORTS
        </p>
        </div>
            
            {data.data.article_info.image && (
              <img
                src={data.data.article_info.image}
                alt={data.data.article_info.title}
                style={{ width: '100%', maxWidth: '400px', borderRadius: '6px', marginBottom: '10px' }}
              />
            )}

          <AboutBanner />

            <h3>{data.data.article_info.title || 'No Title'}</h3>

            <div className="act-wrapper"> {/* Add the wrapper */}
              <div className="act-content"> {/* Add the content container */}

            {/* Render HTML content inside the wrapper */}
            <div
              dangerouslySetInnerHTML={{
                __html: data.data.article_info.content || 'No content available.',
              }}
              style={{
                // backgroundColor: '#f5f5f5',
                // padding: '10px',
                // borderRadius: '4px',
                // wordBreak: 'break-word',
                // whiteSpace: 'pre-wrap',
              }}
            />
          </div>
          </div>
        </div>
      ) : (
        <p>No articles found.</p>
      )}

      {/* Token component to fetch token */}
      <ApiToken setToken={setToken} /> {/* Pass setToken as prop to update token */}
    </div>
  );
};

export default FetchDataPage;
