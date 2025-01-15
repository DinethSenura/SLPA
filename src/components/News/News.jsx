import React from "react";
import "./news.css";
import news1 from '../../assets/images/News/News_1.jpg'; // Replace with actual image paths
import news2 from '../../assets/images/News/News_2.jpg';
import news3 from '../../assets/images/News/News_3.jpg';



/*const newsData = [
  {
    id: 1,
    title: "Port of Colombo Achieves Milestone",
    description: "With ongoing developments we are confident in the Port of Colombo's evolution as the hub of South Asia” – Keith D. Bernard, Chairman SLPA",
    image: "src\assets\images (1).jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Sustainability in Maritime Sector",
    description: "Green energy initiatives are reshaping the maritime industry...",
    image: "src\assets\images (2).jpg",
    link: "#",
  },
  {
    id: 3,
    title: "World Maritime Day Highlights",
    description: "Celebrating innovation and safety in the maritime industry...",
    image: "src\assets\images (3).jpg",
    link: "#",
  },
];*/

const LatestNews = () => {
  return (
    /*<section className="latest-news">
      <h2 className="section-title">Latest News</h2>
      <div className="news-container">
        {newsData.map((news) => (
          <div className="news-item" key={news.id}>
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <h3 className="news-title">{news.title}</h3>
              <p className="news-description">{news.description}</p>
              <a href={news.link} className="news-button">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>*/
    <div className="latest-news">
          <h2 className="section-title">Latest News</h2>
          <div className="news-container">
            
            <div className="news-item">
                

                
              <img src={news1} alt="" className="news-image" />
              <p className="news-description">
                “With ongoing developments we are confident in the Port of Colombo's evolution as the hub of South Asia” – Keith D. Bernard, Chairman SLPA
              </p>
              <button className="news-button">Read more</button>
            </div>
            
            <div className="news-item">
              <img src={news2} alt="News 2" className="news-image" />
              <p className="news-description">
                “The optimum usage of energy is a mandatory requirement” – Eng. Ganaka Hemachandra, Managing Director, SLPA
              </p>
              <button className="news-button">Read more</button>
            </div>
    
            
            <div className="news-item">
              <img src={news3} alt="News 3" className="news-image" />
              <p className="news-description">
                Steering Towards a Safer Future: World Maritime Day 2024
              </p>
              <button className="news-button">Read more</button>
            </div>
                
          </div>
    
          
          <button className="more-news-button">MORE LATEST NEWS →</button>
        </div>
      
  );
};

export default LatestNews;
