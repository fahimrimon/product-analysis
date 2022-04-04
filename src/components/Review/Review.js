import React from 'react';
import './Review.css';
const Review = (props) => {
    const {name, img, rating, commend} = props.review;
    return (
        <div className='review'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{commend}</p>
            
        </div>
    );
};

export default Review;