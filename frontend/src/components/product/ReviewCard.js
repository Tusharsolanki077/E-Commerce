import React from 'react'
import profilepng from '../../assets/playstore.png'

const ReviewCard = ({ review }) => {

    const options = {
        edit: false,
        size: window.innerWidth <  600 ? 20 : 25,
        value: review.rating,
        isHalf: true,
    };

  return (
    <div className='reviewCard'>
        <img src={profilepng} alt="User"/>
            <p>{review.name}</p>
            

            <span>{review.comment}</span>
      
    </div>
  )
};

export default ReviewCard
