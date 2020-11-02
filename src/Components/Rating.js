
import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./Rating.css";

const Rating = ({ setRating }) => {
  const [rate, setRate] = useState(1);
  return (
    <div className="ratingContainer">
      <h3 style={{color:"white" , fontWeight:"normal" }} >Rating filter</h3>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rate}
        onStarClick={(nextValue, prevValue, name) => {
          setRating(nextValue)
          setRate(nextValue)
        }}
        className="starSearch"
      />
    </div>
  );
};

export default Rating;