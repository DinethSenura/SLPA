import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

const ActOfSLPA = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Directly set the provided HTML content.
    const apiData = {
      title: "ACT of SLPA",
      sub_title: "",
      image: "article_image_2019_06_04_1559624237.jpg",
      content: `<p style="text-align: justify;"><strong>AN ACT</strong>&nbsp;to provide for the establishment of the Sri Lanka Ports Authority to develop, maintain, operate and provide port and other services in the ports of Colombo, Galle and Trincomalee and any other port as may be declared hereafter by the minister by order, to be a port to which this Act shall apply; for the exercise, performance and discharge by that authority of the powers, duties and functions of the Port Commissioner, the Port (Cargo) Corporation, and the Port Tally and Protective Services Corporation and such other powers, duties and functions as may be conferred, assigned or imposed on that authority by law; for matters in relation to the officers and servants, property, rights, obligations and liabilities of the Port (Cargo) Corporation and the Port Tally and Protective Services Corporation and the public officers of, the property held by, and the rights. obligations and liabilities of, the department of the Port Commissioner; for the repeal of the Port of Colombo (Administration) act, the Port (Cargo) Corporation Act and the port tally and protective services corporation act; for the modification of certain laws in their application to the ports of Colombo, Galle and Trincomalee and any other port as may be declared hereafter by the Minister by order, to be a port to which this act shall apply; and for connected matters.</p>

<p>[Date of Commencement:&nbsp;1st&nbsp;August, 1979]</p>`
    };

    setHtmlContent(DOMPurify.sanitize(apiData.content));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default ActOfSLPA;
