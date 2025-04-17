import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './localpurchases.css';

import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';

// API endpoints for login and fetching article content
const LOGIN_URL = "https://www.slpa.lk/WEBAPI/V1/Auth/login";
const API_URL = "https://www.slpa.lk/WEBAPI/V1/Articles/get_article_info";

// Hardcoded credentials for login (for testing purposes)
const USERNAME = "TEST";
const PASSWORD = "123";

// The hardcoded API token you provided (use this directly for testing)
const HARD_CODED_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGF0dXMiOnRydWUsInVzZXJuYW1lIjoiVEVTVCIsInRpbWVzdGFtcCI6IjIwMjUtMDQtMTYgMDM6MDE6MzkifQ.TZd_cJFtfKCUJAiZbBLCO23ncplh2dHLVd-MEJEZD18";

// The LocalPurchasesWithAuth component
const LocalPurchasesWithAuth = () => {
  
  // State to manage the token, content, loading, and error states
  const [token, setToken] = useState(localStorage.getItem('authToken') || HARD_CODED_TOKEN);  // Use the hardcoded token if localStorage is empty
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Auto login if token is missing, called once on mount
  useEffect(() => {

    if (token) return; // If token exists, skip login and auto-fetch content

    const loginAndFetchToken = async () => {
      setLoading(true);
      setError('');

      try {
        // Send login request with username and password (using hardcoded credentials for now)
        const response = await axios.post(LOGIN_URL, {
          username: USERNAME,
          password: PASSWORD
        });

        console.log('Login response:', response.data); // Debug: See the login response in console

        // Get token from response (adjust if your response structure is different)
        const { token } = response.data;  // <-- This is where the token is received

        if (token) {
          setToken(token); // Save the token to React state
          localStorage.setItem('authToken', token);  // Save token to localStorage for future sessions
        } else {
          setError('Invalid credentials.');
        }
      } catch (err) {
        console.error(err);
        setError('Login failed. Check credentials.');
      } finally {
        setLoading(false);
      }
    };

    loginAndFetchToken();  // Trigger the login function

  }, [token]);  // Re-run the effect when token changes

  // Fetch content using the token once it's available
  useEffect(() => {

    if (!token) return; // Only fetch content if token exists

    const fetchContent = async () => {
      setLoading(true);
      setError('');

      try {
        const postData = {
          "data": [
            {
              "article_menu": "Local-Purchases-1",
              "article_code": "TWVjaGFuaWNhbCBFcXVpcG1lbnQ=",
              "article_content": "NULL"
            }
          ]
        };

        // Use the token in the Authorization header for the API request
        const response = await axios.post(API_URL, postData, {
          headers: {
            Authorization: `Bearer ${token}`,  // <-- Token is used here for authentication
            'Content-Type': 'application/json'
          }
        });

        // Check if content is returned from the API response
        const apiData = response.data.data;
        if (apiData && apiData[0] && apiData[0].article_content) {
          setContent(apiData[0].article_content);  // Set the content if available
        } else {
          setError('No content found.');  // Handle case where no content is returned
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load content.');  // Handle any API errors
      } finally {
        setLoading(false);
      }
    };

    fetchContent(); // Trigger the content fetch

  }, [token]);  // Re-run this effect when the token changes

  return (
    <div className="local-purchases-container">

      {/* Header section with title and image */}
      <div className="header-section">
        <h1>BOARD OF DIRECTORS</h1>
        <p className="path">
          <span></span>HOME
          <span>&gt;</span>ABOUT
          <span>&gt;</span>BOARD OF DIRECTORS
        </p>
        <img src={portImage2} alt="Colombo Port Overview" className="header-image" />
      </div>

      {/* Content section, either loading or displaying error/content */}
      <div className="act-wrapper">
        {loading ? (
          <p>Loading content...</p>  // Show loading message while fetching
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>  // Show error if there's an issue
        ) : (
          <div className="local-purchase-content" dangerouslySetInnerHTML={{ __html: content }} />  // Display the fetched content
        )}
      </div>

    </div>
  );
};

export default LocalPurchasesWithAuth;
