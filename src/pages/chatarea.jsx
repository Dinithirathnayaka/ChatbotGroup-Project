import React from "react";
import "../styles/index.css";
import { FaUserCircle } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { MdOutlineAttachFile } from "react-icons/md";
import profileimg from "../assets/images/profile.jpg";
import { Link } from "react-router-dom";

function chatarea() {
  return (
    <>
      <Link to="/thank">
        <FaTimes className="close" />
      </Link>
      <div className=" chatar">
        <div className="head">
          <h4 className="logochat">Chat Bot</h4>
          <div className="profile">
            <img src={profileimg} />
          </div>
        </div>

        <div className="conbody">
          <button className="date">Monday,1.27pm</button>
          <br />
          <br />
          <br />
          <button className="btnone" id="one">
            Hello, Kamal How are you!
          </button>
          <br />
          <br />
          <button className="btntwo" id="two">
            Hello,After long time.I am fine{" "}
          </button>
          <br />
          <br />
          <button className="btntwo" id="three">
            How are you !
          </button>
          <br />
          <br />
          <button className="btnone" id="four">
            Fine,Thank you.What are you doing now.How about final exams.
          </button>
          <br />
          <br />
        </div>

        <div className="confooter">
          <div className="msg">
            {" "}
            <p className="text-muted">Type a message...</p>
          </div>
          <div className="send">
            <MdOutlineAttachFile className="se" />
            <FiSend className="se" />
          </div>
        </div>
      </div>
    </>
  );
}

export default chatarea;
