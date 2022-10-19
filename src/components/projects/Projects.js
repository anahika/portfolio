import React from "react";
import "../CommonCss.css";

function Projects() {
  return (
    <>
      <div className="row mt-4">
        <div className=" div1 p-4">
          <h1>Tour Website </h1>
          <ol className="text-left">
            <li>
              <h6>
                Users can get authenticated using{" "}
                <span className="span3">jwt</span>, can view list of tours and
                can book a particular tour.
              </h6>
            </li>
            <li>
              <h6>
                Admin can edit the information of all the employees, can create
                new tours in the database.
              </h6>
            </li>
            <li>
              <h6>
                Technologies used were{" "}
                <span className="span3">
                  React.js, Bootstrap, Microservices, Spring Boot, Eureka
                  Server, PostgreSQL.
                </span>
              </h6>
            </li>
          </ol>
          <a href="/" className="btn btn-info mt-4">
            Github
          </a>
          <br />
          <a href="/" className="btn btn-info mt-4">
            Web Link
          </a>
        </div>
      </div>
      <div className="row justify-content-end mt-4">
        <div className=" div1 p-4">
          <h1>Blog Website </h1>
          <ol className="text-left">
            <li>
              <h6>
                Developed static blog website using{" "}
                <span className="span3">React.js </span>and{" "}
                <span className="span3">Bootstrap.</span>
              </h6>
            </li>
            <li>
              <h6>
                UI is responsive i.e. automatically adjusts for different-sized
                screens and viewports.
              </h6>
            </li>
          </ol>
          <a
            href="https://github.com/anahika/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info mt-4"
          >
            Github
          </a>
          <br />
          <a
            href="https://thenomadicgaddi.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info mt-4"
          >
            {" "}
            Web Link
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
