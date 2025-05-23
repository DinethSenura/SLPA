import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import AboutBanner from "../../../components/AboutBanner/Aboutbanner";
import '../Slpa/slpa.css';

const LOGIN_URL = 'https://www.slpa.lk/WEBAPI/V1/Auth/Login';
const USERNAME = 'TEST';
const PASSWORD = '123';
const DATA_URL = 'https://www.slpa.lk/WEBAPI/V1/Articles/get_article_info';

const ApiToken = ({ setToken }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fullResponse, setFullResponse] = useState(null);

  const data = useMemo(() => ({}), []);

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
        localStorage.setItem('authToken', response.data.Token);
        setToken(response.data.Token);
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
  }, [setToken, data]);

  useEffect(() => {
    loginAndGetToken();
  }, [loginAndGetToken]);

  if (loading) return <p>Logging in and fetching token...</p>;

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

  return <div />;
};

const FetchDataPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem('authToken') || '');

  const requestData = useMemo(() => ({
    data: [{
      article_menu: 'SLPA',
      article_code: 'SGlzdG9yeSAmIE1pbGVzdG9uZXM=',
      article_content: 'NULL',
    }],
  }), []);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setError('No token available. Please log in to proceed.');
        return;
      }

      setLoading(true);

      try {
        const response = await axios.post(DATA_URL, requestData, {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        });

        console.log('Fetched API Data:', response.data);
        setData(response.data);
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
            <div className="image-wrapper">
              <img
                src={`https://www.slpa.lk/uploads/article_main/${data.data.article_info.image}`}
                alt={data.data.article_info.title}
                className="responsive-article-image"
              />
              <div className="overlay-text">
                <h1>SLPA</h1>
                <p className="path">
                  <span></span>HOME
                  <span>&gt;</span>ABOUT
                  <span>&gt;</span>SLPA
                </p>
              </div>
            </div>
          </div>

<div className="about-banner-container">
  <AboutBanner />
</div>
          <h3 className="article-title">
            {data.data.article_info.title || 'No Title'}
          </h3>

          <div className="act-wrapper">
            <div className="act-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.data.article_info.content || 'No content available.',
                }}
                // style={{
                //   width: '200%',
                //   maxWidth: '800px',
                //   margin: '0 auto',
                // }}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>No articles found.</p>
      )}

      <ApiToken setToken={setToken} />
    </div>
  );
};

export default FetchDataPage;
