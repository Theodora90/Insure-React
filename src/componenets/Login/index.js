import React from "react";
import "./login.scss";

const Login = ({ close }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" style={{padding: '10% 1rem 0 1rem'}}>
        <form className="modal-content login-form-container">
          <div className="field">
            <label className="label" htmlFor="email">
              Name
            </label>
            <div className="control">
              <input
                className="input has-background-light"
                type="text"
                placeholder="e.g Alex Smith"
              />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <div className="control">
              <input
                className="input has-background-light"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
                id="email"
              />
            </div>
          </div>
          <button className="button is-info is-fullwidth">Login</button>
        </form>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => close()}
        ></button>
      </div>
    </div>
  );
};
export default Login;
