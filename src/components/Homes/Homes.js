import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Homes.css';
const Homes = ({review}) => {
    const {name, img, rating, commend} = review;
    return (
        <div className='review'>
            <div className="img">
                 <img src={img} alt="" />
            </div>
            <div className="text-info">
                 <h2>Name: <span>{name}</span></h2>
                 <p>{commend}</p>
                 <h5>Ratings: <span className='star-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalf} /></span><span>{rating}</span></h5>
                 
            </div>

            
        </div>
    );
};

export default Homes;