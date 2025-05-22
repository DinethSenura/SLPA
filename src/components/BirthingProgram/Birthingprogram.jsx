import React, { useState, useEffect } from "react";
import axios from "axios";
import "../BirthingProgram/birthingprogram.css";

const API_URL = "https://www.slpa.lk/berthing-programme/mobile_api/get_all_schedule";

const Esystem = () => {
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

  return (
    <div className="berthing-system">
      <h3>BERTHING PROGRAMME</h3>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error fetching data: {error}</p>
      ) : (
        <div className="table-container">
          <table className="berthing-table">
            <thead>
              <tr>
                <th>Vessel</th>
                <th>ETA</th>
              </tr>
            </thead>
          </table>
          <div className="scroll-container">
            <table className="berthing-table">
              <tbody className="scroll-content">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.vName}</td>
                    <td>{item.dEta}</td>
                  </tr>
                ))}
                {/* Duplicate data for smooth scrolling */}
                {data.map((item, index) => (
                  <tr key={`repeat-${index}`}>
                    <td>{item.vName}</td>
                    <td>{item.dEta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a href="http://www.slpa.lk/berthing-programme/" target="_blank" rel="noopener noreferrer">More</a>
        </div>
      )}
    </div>
  );
};

export default Esystem;
