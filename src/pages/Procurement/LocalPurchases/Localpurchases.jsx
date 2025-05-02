import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './localpurchases.css';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';

// API endpoint
const LOGIN_URL = '/WEBAPI/V1/Auth/login';

// Hardcoded credentials
const USERNAME = "TEST";
const PASSWORD = "123";

const LocalPurchasesWithAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('authToken') || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fullResponse, setFullResponse] = useState(null);

  // Function to login and get token
  const loginAndGetToken = async () => {
    try {
      setLoading(true);
      const response = await axios.post(LOGIN_URL, {
        username: USERNAME,
        password: PASSWORD
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Full Login Response:', response); // Debugging
      setFullResponse(response);

      if (response.data && response.data.token) {
        const { token } = response.data;
        localStorage.setItem('authToken', token);
        setToken(token);
      } else {
        setError('Failed to get token. Response: ' + JSON.stringify(response.data));
      }
    } catch (err) {
      console.error('Login Error:', err);
      if (err.response) {
        setError(`Authentication failed (${err.response.status}): ${err.response.data.message || 'Unknown error'}`);
      } else {
        setError('Authentication failed: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Login on mount if no token
  useEffect(() => {
    if (!token) {
      loginAndGetToken();
    }
  }, [token]);

  return (
    <div className="local-purchases-container">
      <div className="header-section">
        <h1>Token Fetching Page</h1>
        <p className="path">
          <span></span>HOME
          <span>&gt;</span>LOGIN
          <span>&gt;</span>TOKEN
        </p>
        <img src={portImage2} alt="Colombo Port Overview" className="header-image" />
      </div>

      <div className="act-wrapper">
        {loading ? (
          <p>Logging in and fetching token...</p>
        ) : error ? (
          <div style={{ color: 'red', margin: '20px', padding: '15px', border: '1px solid #ffcccc', backgroundColor: '#fff0f0' }}>
            <h3>Error</h3>
            <p>{error}</p>
            {fullResponse && (
              <div style={{ marginTop: '15px' }}>
                <h4>Full Response:</h4>
                <pre style={{ 
                  wordBreak: 'break-all', 
                  whiteSpace: 'pre-wrap',
                  backgroundColor: '#f5f5f5',
                  padding: '10px',
                  borderRadius: '4px'
                }}>
                  {JSON.stringify(fullResponse.data, null, 2)}
                </pre>
              </div>
            )}
          </div>
        ) : token ? (
          <div style={{ 
            margin: '20px 0', 
            padding: '15px', 
            backgroundColor: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}>
            <h3>Authentication Successful</h3>
            <h4>Token:</h4>
            <pre style={{ 
              wordBreak: 'break-all', 
              whiteSpace: 'pre-wrap',
              backgroundColor: '#fff',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #eee'
            }}>
              {token}
            </pre>
          </div>
        ) : (
          <p>No token found. Please refresh.</p>
        )}
      </div>
    </div>
  );
};

export default LocalPurchasesWithAuth;
