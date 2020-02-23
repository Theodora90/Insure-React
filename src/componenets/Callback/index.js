import React from 'react';
import PropTypes from "prop-types";
import './index.scss';

const CallBack = ({title, subtitle, button})=> {
  return(
    <section className="hero is-primary container">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-mobile">
                <div className="column">
                  <h1 className="title is-size-6-mobile">{title}</h1>
                  <h1 className="title m-t5 is-size-6-mobile">{subtitle}</h1>
                </div>
                <div className="column">{button && (
                  <button className="button is-inverted is-info is-outlined">
                    {button}
                  </button>
                    )}
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
CallBack.propTypes ={
  title: PropTypes.string,
  subtitle: PropTypes.string,
  button: PropTypes.string
};
export default CallBack