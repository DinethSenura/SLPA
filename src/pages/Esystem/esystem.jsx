import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Esystem/esystem.css";
import EsystemImage from "../../assets/images/esystem/e-system.jpg";
import Enav from "../../components/Enav/Enav";

const API_URL = "https://www.slpa.lk/berthing-programme/mobile_api/get_all_schedule";

const Esystem = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch API data on component mount
  useEffect(() => {
    axios
      .get(API_URL)
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
    try {
      const response = await axios.get(`${API_URL}?date=${selectedDate}`);
      setExchangeRate(response.data.exchangeRate || null);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  return (
    <>
      <Enav />
      <div
        className="esystem"
        style={{
          backgroundImage: `url(${EsystemImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-25px",
        }}
      >
        {/* Exchange Rates Section */}
        <div className="exchange-widget">
          <h3>EXCHANGE RATES</h3>

          <form
            className="exchange-form"
            onSubmit={(e) => {
              e.preventDefault();
              fetchExchangeRate();
            }}
          >
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                className="date-input"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div className="currency-display">
              <span>USD</span>
              <span className="currency-icon">🔄</span>
              <span>LKR</span>
            </div>
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
          {exchangeRate !== null && (
            <p className="exchange-result">Exchange Rate: {exchangeRate} LKR</p>
          )}
        </div>

        {/* Berthing Programme Section */}
        <div className="berthing-system">
          <h3>BERTHING PROGRAMME</h3>
          {loading ? (
            <p>Loading data...</p>
          ) : error ? (
            <p>Error fetching data: {error}</p>
          ) : (
            <table className="berthing-table">
              <thead>
                <tr>
                  <th>Vessel</th>
                  <th>ETA</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.vName}</td>
                    <td>{item.dEta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Esystem;
