import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";


const Foot = ({title, img, pic, image, picture, subtitle, children}) => {
  return (
    <section className="b-g is-info is-medium m-t">
      <div className="container">
        <div className="d-flex">
          <h2 className="p-t">{title}</h2>
          <div className="p-t">
          <img src={img} alt="facebook" className="p-l"/>
          <img src={pic} alt="twitter" className="p-l"/>
          <img src={image} alt="pinterest" className="p-l"/>
          <img src={picture} alt="instagram" className="p-l"/>
          </div> 
        </div>
        <hr className="color"/>
        <div className="columns">
          <div className="column">
            <div>
            {subtitle}ttttttt
            </div>
            
            {children}
          </div>
          <div className="column">
            {subtitle}
            {children}
          </div>
          <div className="column">
            {subtitle}
            {children}
          </div>
          <div className="column">
            {subtitle}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
Foot.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  pic: PropTypes.string,
  image: PropTypes.string,
  picture: PropTypes.string,
  children: PropTypes.string
};
export default Foot;