import React from 'react';
import '../Esystem/esystem.css';
import EsystemImage from '../../assets/images/esystem/e-system.jpg'; 
import Enav from '../../components/Enav/Enav';


const Esystem = () => {
  return (
    <>
      <Enav />
      
      <div
        className="esystem"
        style={{
          backgroundImage: `url(${EsystemImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-25px',
        }}
      >  
        <div className="exchange-widget">
          <h3>EXCHANGE RATES</h3>
          <form className="exchange-form">
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" className="date-input" />
            </div>
            <div className="currency-display">
              <span>USD</span>
              <span className="currency-icon">🔄</span>
              <span>LKR</span>
            </div>
            <button type="submit" className="search-button">search</button>
          </form>
        </div>
        
        <div className="berthing-system">
        <h3>BERTHING PROGRAMME</h3>
          <table className="berthing-table">
            <thead>
              <tr>
                <th>Vessel</th>
                <th>ETA</th>
              </tr>
            </thead>
            <tbody id="berthing-tbody">
              <tr>
                <td>MSC DHANTIA F</td>
                <td>EX: 1MN</td>
              </tr>
              <tr>
                <td>GANTA BHUM</td>
                <td>0200 5/12</td>
              </tr>
              <tr>
                <td>ARTENOS</td>
                <td>1400 5/12</td>
              </tr>
              <tr>
                <td>NAVIOS UNITE</td>
                <td>1400 6/12</td>
              </tr>
              <tr>
                <td>MSC SHRISTI</td>
                <td>1000 5/12</td>
              </tr>
              <tr>
                <td>MSC SKY II</td>
                <td>1800 11/12</td>
              </tr>
            </tbody>
          </table>
          {/* <button>read more</button> */}
        </div>
      </div>
      </>
  );
};

export default Esystem;
