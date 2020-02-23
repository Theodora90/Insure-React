import React from "react";
import PropTypes from "prop-types";
import "./hero.scss";

const Hero = ({ title, subtitle, children, button }) => {
  return (
    <section className="hero is-primary is-medium is-mobile">
      <div className=" container hero-body">
        <div className="columns">
          <div className="column is-full-mobile">
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
            {button && (
              <button className="button is-inverted is-info is-outlined">
                {button}
              </button>
            )}
          </div>
          <div className="column is-full-mobile">{children}</div>
        </div>
      </div>
    </section>
  );
};
Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.object,
  button: PropTypes.string
};
export default Hero;
