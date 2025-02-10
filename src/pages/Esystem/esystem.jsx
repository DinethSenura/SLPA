import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Esystem/esystem.css";
import Enav from "../../components/Enav/Enav";
import Birthingprogram from "../../components/BirthingProgram/Birthingprogram";

const BERTHING_API_URL = "https://www.slpa.lk/berthing-programme/mobile_api/get_all_schedule";
const EXCHANGE_RATE_API_URL = "https://www.slpa.lk/Exchange/API/get_exchange_rate";

const Esystem = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loadingExchangeRate, setLoadingExchangeRate] = useState(false);
  const [exchangeError, setExchangeError] = useState(null);

  // Fetch Berthing Program data on component mount
  useEffect(() => {
    axios
      .get(BERTHING_API_URL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Fetch Exchange Rate for a Specific Date
  const fetchExchangeRate = async () => {
    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    setLoadingExchangeRate(true);
    setExchangeError(null);

    try {
      const response = await axios.get(EXCHANGE_RATE_API_URL, {
        params: { r_date: selectedDate },
      });

      const data = response.data;

      if (data && data !== "0") {
        setExchangeRate(`USD 1 = LKR ${data}`);
      } else {
        setExchangeRate("Not found!");
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      setExchangeError("Failed to fetch exchange rate.");
    } finally {
      setLoadingExchangeRate(false);
    }
  };

  return (
    <>
      <Enav />

      <div className="esystem-container">
        {/* Berthing Program & Exchange Rate Section */}
        <div className="berthing-exchange-container">
          {/* Berthing Program */}
          <div className="berthing-program">
            {loading ? (
              <p>Loading berthing program data...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <Birthingprogram data={data} />
            )}
          </div>

          {/* Exchange Rate Table */}
          <div className="exchange-widget">
            <h3>EXCHANGE RATES</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetchExchangeRate();
              }}
            >
              <div className="form-group">
                <label htmlFor="ex_r_date">Date:</label>
                <input
                  type="date"
                  id="ex_r_date"
                  className="date-input"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
              </div>

              <div className="currency-display">
                <span>USD</span>
                <span className="currency-icon">🔄</span>
                <span>LKR</span>
              </div>

              {loadingExchangeRate ? (
                <p className="rate_text">Loading...</p>
              ) : exchangeError ? (
                <p className="rate_text">{exchangeError}</p>
              ) : exchangeRate ? (
                <p className="rate_text">{exchangeRate}</p>
              ) : null}

              <button type="submit" id="ex_rate_btn" className="search-button">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Esystem;
