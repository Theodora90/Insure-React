import React from "react";
import PropTypes from "prop-types";

const HomeCard = ({ img, title, subtitle, hasBorder }) => {
  return (
    <div className={`column ${hasBorder ? "border" : ""}`}>
      <img
        src={img}
        alt="flash"
        style={{ height: "50px", width: "50px", margin: "18%" }}
      />
      <div>
        <h2>{title}</h2>
      </div>
      <div className="subtitle">
        <p style={{ marginTop: "5%", fontSize: "14px" }}>{subtitle}</p>
      </div>
    </div>
  );
};
HomeCard.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  hasBorder: PropTypes.bool
};
export default HomeCard;
