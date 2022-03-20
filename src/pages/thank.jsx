import React from "react";
import "../styles/thank.css";
import Bye from "../assets/images/bye.png";

function thank() {
  return (
    <>
      <div className="thankbody">
        <div className="col-12">
          <div className="head">
            <h4 className="logochat">Chat Bot</h4>
          </div>

          <div className="thanksbody">
            <h5>This Chat Session Has Ended</h5>
            <h2>Thank You For Chatting With Us!</h2>
            <div className="bounce">
              <img src={Bye} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default thank;
