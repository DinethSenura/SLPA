import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://www.slpa.lk/WEBAPI/V1'; // Replace with your actual API base URL
const LOGIN_URL = `${API_BASE_URL}/Auth/Login`; // Replace with your login API endpoint
const DATA_URL = `${API_BASE_URL}/Articles/get_article_info`; // Replace with your data API endpoint

const useAuth = () => {
    const [token, setToken] = useState(localStorage.getItem('authToken') || null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);

    const login = useCallback(async (username, password) => {
        try {
            const response = await axios.post(LOGIN_URL, {}, {
                headers: {
                    'username': username,
                    'password': password,
                },
            });
            const newToken = response.data.token; // Assuming your login API returns a 'token' field
            localStorage.setItem('authToken', newToken);
            setToken(newToken);
            setIsAuthenticated(true);
            return true; // Login successful
        } catch (error) {
            console.error('Login failed:', error);
            setIsAuthenticated(false);
            return false; // Login failed
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('authToken');
        setToken(null);
        setIsAuthenticated(false);
    }, []);

    return { token, isAuthenticated, login, logout };
};

const DataFetcher = ({ username, password }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { token, isAuthenticated, login } = useAuth();

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        if (!isAuthenticated) {
            const loggedIn = await login(username, password);
            if (!loggedIn) {
                setLoading(false);
                setError('Authentication failed. Please check your credentials.');
                return;
            }
        }

        try {
            const response = await axios.post(
                DATA_URL,
                {
                    data: [
                        {
                            article_menu: 'Foreign-Purchases-3',
                            article_code: 'RWxlY3RyaWNhbCBlcXVpcG1lbnQ=',
                            article_content: 'NULL',
                        },
                    ],
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Fixed template literal
                        'Content-Type': 'application/json',
                    },
                }
            );
            setData(response.data); // Adjust based on your API response structure
        } catch (err) {
            console.error('Error fetching data:', err);
            if (err.response && err.response.status === 401) {
                // Token might be expired, try logging in again
                const loggedIn = await login(username, password);
                if (loggedIn) {
                    // Retry fetching data after successful login
                    fetchData();
                } else {
                    setError('Authentication failed again after token expiry.');
                }
            } else {
                setError('Failed to fetch data.');
            }
        } finally {
            setLoading(false);
        }
    }, [DATA_URL, isAuthenticated, login, password, token, username]);

    useEffect(() => {
        // Fetch data when the component mounts or when authentication status changes
        fetchData();
    }, [fetchData]);

    if (loading) {
        return <div>Loading data...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Fetched Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            {/* Render your data here */}
        </div>
    );
};

const App = () => {
    // Replace with your actual username and password (consider more secure storage)
    const username = 'TEST';
    const password = '123';

    return (
        <div>
            <DataFetcher username={username} password={password} />
        </div>
    );
};

export default App;