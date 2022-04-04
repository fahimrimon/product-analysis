import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';
const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='reviews-text'>
            {
                reviews.map(review => <Review 
                key={review.id}
                review={review}
                ></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;