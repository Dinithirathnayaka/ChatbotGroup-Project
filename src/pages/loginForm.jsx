import React from "react";
import "../styles/login.css";
import Chat from "../assets/images/live-chat.png";
import { useFormik } from "formik";
import { MdOutlineWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";

function loginFrom() {
  const initialValues = {
    username: "",
    email: "",
  };

  // const [isupload] = useState(false);

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: "" });
    // addform(values).then((response) => {
    //   console.log(response);
    //   setLoading(true);
    //   console.log(response);
    // });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.username) {
      errors.username = "User Name can not be empty";
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

    if (!values.password) {
      errors.password = "You must enter a password";
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
      <div className="row ">
        <div className="col-md-6 col-12">
          <div className="animation">
            <div className="avatar">
              <a href="https://codepen.io/MarioDesigns/">
                <img src={Chat} alt="Skytsunami" />
              </a>
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
            <h4 className="logintopic">Let's Chat -Login Here</h4>
          </div>

          <form className="form" onSubmit={formik.handleSubmit}>
            <p className="topic">
              Hi <MdOutlineWavingHand /> ! please fill out the form below to
              start chatting with the next available agent
            </p>
            <div className="form-group mt-5">
              <input
                type="text"
                className="form-control  "
                id="username"
                name="username"
                placeholder="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="small text-danger">
                  {formik.errors.username}
                </div>
              ) : null}
            </div>

            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="small text-danger">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* <div className="form-group mt-3">
              <input
                type="password"
                className="form-control "
                id="password"
                name="password"
                minlength="8"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="small text-danger">
                  {formik.errors.password}
                </div>
              ) : null}
            </div> */}

            <Link to="/chatarea">
              <button type="submit" className="btn ">
                Start Chat
              </button>
            </Link>

            <p className="sign">
              Don't Have Account? <Link to="/registerform">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default loginFrom;
