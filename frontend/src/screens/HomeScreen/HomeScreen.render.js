import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/Logo.png";
import MeetLogo from "../../assets/MeetLogo.png";
import MeetArrow from "../../assets/MeetArrow.png";
import HomePic from "../../assets/HomePic.jpg";
import "./HomeScreen.css";
import { vid } from "./HomeScreen";

export const Home = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#home">
          <img className="RevaLogo" src={Logo} alt="Reva Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#Help">Help</a>
            <a href="#login">Login</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <hr className="hr" />
      <div className="row">
        <div className="column">
          <img className="" src={MeetArrow} alt="meetLogo" />

          <button id="post-btn" onClick={() => vid()}>
            Take Class
          </button>

          <button>Join Class</button>
        </div>
        <div className="column1">
          <img className="MeetLogo" src={MeetLogo} alt="meetLogo2" />
        </div>
        <h1 id="Take-class"></h1>
      </div>

      <img className="HomePic" src={HomePic} alt="Home pic" />
      <footer>
        <p>
          REVA University,
          <br /> Rukmini Knodge Park Kattigenahalli, <br /> Yelahanka, Bangalore
          560 064 Karnataka,
          <br /> India. admissions@reva.edu.in <br /> +91- 90211 90211
          080-46966966v
        </p>
      </footer>
    </>
  );
};
