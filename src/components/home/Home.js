import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="row">
        <div className="col-xl-4">
          <div className="d-flex align-items-center justify-content-center">
            <Card className="profile-card d-flex align-items-center justify-content-center">
              <Card.Img
                src={process.env.PUBLIC_URL + "/Anshika.jpeg"}
                className="icon"
              />
              <Card.Body>
                <Card.Title className="title"> Anshika</Card.Title>
                <p>
                  An Engineer focused on creating innovative solutions and
                  collaborating effectively to deliver exceptional software
                  products.
                </p>
                <Link to="/about-me" className="btn btn-info km-btn">
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-xl-8 ">
          <div className="d-flex align-items-center justify-content-center">
            <ul>
              <li>
                <Link
                  to="/about-me"
                  className="btn btn-lg btn-block btn-outline-info "
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="btn btn-lg btn-block btn-outline-info "
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="btn btn-lg btn-block btn-outline-info "
                >
                  Skills
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1eBdhD-9xPnFRHOGdV50GbOIQ4QVbMRMU?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-block btn-outline-info "
                >
                  Resume
                </a>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="btn btn-lg btn-block btn-outline-info "
                >
                  More about me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center ach-div">
          <h3>
            Being conscious that I am alive right now is my biggest achievement!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
