import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Homes from '../Homes/Homes';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='home-container'>
            <div className="text-info">
                <h1><span>Your Next Level</span></h1>
                <h1>Gaming Monitor!</h1>
                <p>ASUS continues to be a frontrunner for innovative technology, from ushering in the world’s first consumer gaming display at 144Hz in 2012, to 1440p resolution Nvidia G-Sync monitors just two years later. Within 2020, the company has managed to push into 360Hz, 4K HDR with 144Hz.</p>
                <button className='live-btn'>Live Demo</button>
            </div>
            <div className="main-img">
                   <img src="https://www.skyland.com.bd/wp-content/uploads/2020/05/asus-vg248qg-gaming-monitor-bd-500x500-1.jpg" alt="" />
            </div>

        </div>
        <div className='review-text'>
            <h1>Customer Reviews(3)</h1>
        </div>
        {
            reviews.slice(0,3).map(review => <Homes 
            key={review.id}
            review={review}
            ></Homes>)
        }  
        <div className="all-review">
        <Link to="/reviews">See All Reviews</Link>
        </div>
        

        </div>
        
    );
};
export default Home;