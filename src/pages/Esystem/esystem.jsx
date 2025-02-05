import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Esystem/esystem.css";
import EsystemImage from "../../assets/images/esystem/e-system.jpg";
import Enav from "../../components/Enav/Enav";

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
        <div className="berthing-system">
          <h5>BERTHING PROGRAMME</h5>
          {loading ? (
            <p>Loading data...</p>
          ) : error ? (
            <p>Error fetching data: {error}</p>
          ) : (
            <div className="scroll-container">
              <table className="berthing-table">
                <thead>
                  <tr>
                    <th>Vessel</th>
                    <th>ETA</th>
                  </tr>
                </thead>
                <tbody>
  <div className="scroll-content">
    {data.map((item, index) => (
      <tr key={index}>
        <td>{item.vName}</td>
        <td>{item.dEta}</td>
      </tr>
    ))}
    {/* Repeat rows for continuous animation */}
    {data.map((item, index) => (
      <tr key={`repeat-${index}`}>
        <td>{item.vName}</td>
        <td>{item.dEta}</td>
      </tr>
    ))}
  </div>
</tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Esystem;
