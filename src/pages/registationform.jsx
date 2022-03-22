import React from "react";
import "../styles/login.css";
// import Chat1 from "live-chat.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

function registationform() {
  const initialValues = {
    fullname: "",
    email: "",
    username: "",
    password: "",
    retypepassword: "",
  };
  const onSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm({ values: "" });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.fullname) {
      errors.fullname = "Full Name cann't be empty";
    }

    if (!values.email) {
      errors.email = "Email cannot be empty";
    } else if (
      !/(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/.test(
        values.email
      )
    ) {
      errors.email = "Email must be in correct format";
    }

    if (!values.username) {
      errors.username = "Username cannot be empty";
    }

    if (!values.password) {
      errors.password = " cannot be empty";
    }

    if (values.retypepassword != values.password) {
      errors.retypepassword = "Incorrect password.try again";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

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

          <form className="form" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Full Name</label>
              <input
                type="text"
                className="form-control mb-3 "
                id="fullname"
                name="fullname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullname}
              />
              {formik.errors.fullname ? (
                <div className="small text-danger">
                  {formik.touched.fullname && formik.errors.fullname}
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="title">Email</label>
              <input
                type="text"
                className="form-control mb-3"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="small text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="title">Username</label>
              <input
                type="text"
                className="form-control mb-3 "
                id="username"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.errors.username ? (
                <div className="small text-danger">
                  {formik.touched.username && formik.errors.username}
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="title">Password</label>
              <input
                type="password"
                className="form-control mb-3 "
                id="password"
                name="password"
                minlength="8"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="small text-danger">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="title">Retypepassword</label>
              <input
                type="password"
                className="form-control  "
                id="retypepassword"
                name="retypepassword"
                minlength="8"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.retypepassword}
              />
              {formik.touched.retypepassword && formik.errors.retypepassword ? (
                <div className="small text-danger">
                  {formik.errors.retypepassword}
                </div>
              ) : null}
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
