import React from "react";
import { Rating } from "@mui/material";
import "../index.css";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor mi eu elit bibendum rutrum. ahem ahem",
    },
    {
      id: 2,
      name: "Jane Doe",
      rating: 5,
      comment:
        "Sed faucibus ultrices ante, eu convallis massa ultrices sed. Nam et nulla vel massa venenatis posuere eget a velit.",
    },
  ];

  return (
    <div>

      <h2 className="title" style={{textAlign:"center",  fontSize:"40px"}}>Reviews</h2>
    <div className="reviews-container glass-effect">
      {reviews.map((rev) => {
          return (
              <div className="review" key={rev.id}>
            <h4>{rev.name}</h4>
            <p>{rev.comment}</p>
            <Rating defaultValue={rev.rating} precision={1} readOnly />
          </div>
        );
    })}
    </div>
    </div>
  );
};

export default Reviews;
