import React from 'react';
import '../News/news.css'; // Include CSS for styling
import news1 from '../../assets/images/News/News_1.jpg'; // Replace with actual image paths
import news2 from '../../assets/images/News/News_2.jpg';
import news3 from '../../assets/images/News/News_3.jpg';

const News = () => {
  return (
    <div className="latest-news1">
      <h2 className="news-title1">Latest News</h2>
      <div className="news-container1">
        {/* News 11 */}
        <div className="news-item_11">
          <img src={news1} alt="News 1" className="news-image_11" />
          <div className='image23'>
          <p className="news-description1">
            “With ongoing developments we are confident in the Port of Colombo's evolution as the hub of South Asia” – Keith D. Bernard, Chairman SLPA
          </p>
          <button className="news-button1">Read more</button>
          </div>
        </div>

        {/* News 31 */}
        <div className='right_side'>
          <div>
        <div className="news-item_31">
          <img src={news3} alt="News 3" className="news-image_31" />
          <div className='image23'>
          <p className="news-description1">
            Steering Towards a Safer Future: World Maritime Day 2024
          </p>
          <button className="news-button1">Read more</button>
          </div>
        </div>
        </div>

        {/* News 21 */}
        <div className="news-item_21">
          <img src={news2} alt="News 2" className="news-image_21" />
          <div className='image23'>
          <p className="news-description1">
            “The optimum usage of energy is a mandatory requirement” – Eng. Ganaka Hemachandra, Managing Director, SLPA
          </p>
          <button className="news-button1">Read more</button>
        </div>
        </div>
        </div>
      </div>
      <button className="more-news-button1">MORE LATEST NEWS →</button>
    </div>
  );
};

export default News;