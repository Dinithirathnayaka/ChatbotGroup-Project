import React from "react";
import "../styles/login.css";
// import Chat1 from "live-chat.png";
import { Link } from "react-router-dom";

function registationform() {
  return (
    <div className="login">
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="animation">
            <div className="avatar">
              {/* <a href="https://codepen.io/MarioDesigns/">
                <img src={Chat1} alt="Skytsunami" />
              </a> */}
            </div>
            <div className="content">
              <h3 style={{ color: "#ffff" }}>Let's Chat ? We are onilne</h3>
              <p>Follow us on:</p>
              {/* <p>
                <span>
                  <a href="https://twitter.com/MDesignsuk" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </span>
                <span>
                  <a href="https://github.com/Mario-Duarte/" target="_blank">
                    <i className="fa fa-github"></i>
                  </a>
                </span>
                <span>
                  <a href="https://bitbucket.org/Mario_Duarte/" target="_blank">
                    <i className="fa fa-bitbucket"></i>
                  </a>
                </span>
                <span>
                  <a href="https://codepen.io/MarioDesigns/" target="_blank">
                    <i className="fa fa-codepen"></i>
                  </a>
                </span>
              </p> */}
            </div>
          </div>
        </div>

        <div className=" left col-md-6 col-12">
          <div className="header">
            <h4 className="logintopic">Let's Chat -Registation Form</h4>
          </div>

          <form className="form">
            <div className="form-group">
              <input
                type="text"
                className="form-control  "
                id="fullname"
                name="fullname"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control  "
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control  "
                id="username"
                name="username"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control  "
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control  "
                id="retypepassword"
                name="retypepassword"
                placeholder="Retypepassword"
              />
            </div>
            <button type="submit" className="btn ">
              Register
            </button>
            <p>
              <Link to="/">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default registationform;
