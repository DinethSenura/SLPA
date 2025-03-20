import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

const Slpa = () => { // ✅ Component name starts with uppercase
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('https://www.slpa.lk/WEBAPI/V1/Articles/get_article_info')
      .then(response => response.json())
      .then(data => setHtmlContent(DOMPurify.sanitize(data.message)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return ( 
    <div>
      <h4 style={{ color: '#236F86' }}>&nbsp;</h4> 

      <p>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          height="444"
          scrolling="yes"
          src="https://www.youtube.com/embed/jvRH8dcbLpg"
          title="YouTube video player"
          width="790"
        ></iframe>
      </p>

      <h4 style={{ color: '#236F86' }}>
        <strong>History</strong>
      </h4>

      <p style={{ textAlign: 'justify' }}>
        Since 1918, the Port of Colombo had been administered by the Colombo Port Commission, a Government Department which was made responsible for the supply and maintenance of cargo-handling equipment and other infrastructure, pilotage services, docking, and slipping. The government had funded all its activities. Stevedoring and shore handling activities were in the hands of several private wharfage companies. In 1958, the Port Cargo Corporation was set up to take over these activities performed by a multiplicity of operators. The Port Tally and Protective Services Corporation was formed in 1967 in order to perform on-board tallying and watchmen services on behalf of Agents.
      </p>

      <p style={{ textAlign: 'justify' }}>
        The Sri Lanka Ports Authority was constituted under the provisions of the Sri Lanka Ports Authority Act, No. 51 of 1979 (subsequently amended by Act No. 7 of 1984 and Act No. 35 of 1984) on the 1st of August 1979, effecting the merger of the Colombo Port Commission Department and the two existing statutory Corporations. This resulted in a unified organization with a streamlined structure. The Ports Authority does not receive financial allocations from the government but operates on its own revenue and resources.
      </p>

      <p>&nbsp;</p>

      <h4 style={{ color: '#236F86', marginBottom: '20px' }}>
        <strong>Milestones</strong>
      </h4>

      <table cellPadding="2" cellSpacing="4" width="100%" border="1">
        <tbody>
          <tr>
            <td align="left" valign="top" width="10%">1505 -</td>
            <td align="left" valign="top" width="88%">Port of Colombo was known to the Western World</td>
          </tr>
          <tr>
            <td align="left" valign="top" width="10%">1912 -</td>
            <td align="left" valign="top" width="88%">Colombo Port was converted to a sheltered harbour</td>
          </tr>
          <tr>
            <td align="left" valign="top" width="10%">1913 -</td>
            <td align="left" valign="top" width="88%">Colombo Port Commission Established</td>
          </tr>
          <tr>
            <td align="left" valign="top" width="10%">1954 -</td>
            <td align="left" valign="top" width="88%">Inauguration of the Queen Elizabeth Quay</td>
          </tr>
          <tr>
            <td align="left" valign="top" width="10%">1954 -</td>
            <td align="left" valign="top" width="88%">Completion of 16 alongside berths, transit sheds, and warehouses</td>
          </tr>
          <tr>
            <td align="left" valign="top" width="10%">1958 -</td>
            <td align="left" valign="top" width="88%">Port (Cargo) Corporation was founded</td>
          </tr>
          <tr>
            <td align="left" valign="top" width="10%">1979 -</td>
            <td align="left" valign="top" width="88%">Sri Lanka Ports Authority was Formed</td>
          </tr>
        </tbody>
      </table>

      {/* Inject API content safely */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Slpa; // ✅ Use correct component name
