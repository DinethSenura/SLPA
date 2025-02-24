import React, { useState, useEffect } from 'react';
import './client.css'; // CSS file for styles
import a from '../../assets/images/clients/1.jpg';
import b from '../../assets/images/clients/2.jpg';
import c from '../../assets/images/clients/3.jpg';
import d from '../../assets/images/clients/4.jpg';
import e from '../../assets/images/clients/5.jpg';
import f from '../../assets/images/clients/6.jpg';
import g from '../../assets/images/clients/7.jpg';
import h from '../../assets/images/clients/8.jpg';
import i from '../../assets/images/clients/10.jpg';
import j from '../../assets/images/clients/11.jpg';
import k from '../../assets/images/clients/12.jpg';
import l from '../../assets/images/clients/13.jpg';
import m from '../../assets/images/clients/14.jpg';
import n from '../../assets/images/clients/15.jpg';

const Client = () => {
  const [currentGroup, setCurrentGroup] = useState(1);

  const group1 = [a, b, c, d, e, f, g];
  const group2 = [h, i, j, k, l, m, n];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentGroup((prevGroup) => (prevGroup === 1 ? 2 : 1));
    }, 10000); // Switch groups every 10 seconds
    return () => clearTimeout(timer);
  }, [currentGroup]);

  const images = currentGroup === 1 ? group1 : group2;

  return (
    <div className="slideshow-container1">
      <div className="slideshow1">
        {images.map((image, index) => (
          <img key={index} src={image} alt="Client" className="side-image1" />
        ))}
      </div>
    </div>
  );
};

export default Client;