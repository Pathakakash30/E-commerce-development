import React from "react";
import { PropTypes } from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="ratings">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fa-solid fa-star"
              : value >= 0.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fa-solid fa-star"
              : value >= 1.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fa-solid fa-star"
              : value >= 2.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fa-solid fa-star"
              : value >= 3.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fa-solid fa-star"
              : value >= 4.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span style={{ marginLeft: "5px" }}>{text && text}</span>
    </div>
  );
};

//setting default props value in rating component , if not given
Rating.defaultProps = {
  color: "#f8e825",
};

// setting up props type this is totally optional, it just give warning in console if does'nt match type of props
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Rating;
