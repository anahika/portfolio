import React from "react";
import "../CommonCss.css";

function Projects() {
  var Myprojects = [
    {
      title: "Tour Website",
      points: [
        <>
          Developed a tour booking platform using a tech stack that included
          <span className="span3"> PostgreSQL </span> for the database,
          <span className="span3"> React </span> for the frontend,
          <span className="span3"> Eureka Server </span> for service discovery,
          and <span className="span3"> Spring Boot </span> for building
          microservices.
        </>,

        <>
          Designed and implemented microservices architecture using Spring Boot,
          enabling <span className="span3"> scalability, modularity, </span>and
          efficient handling of tour-related functionalities.
        </>,
        <>
          Implemented a secure authentication system using
          <span className="span3"> JSON Web Tokens (JWT) </span>
          for user authentication and authorization.
        </>,
      ],
      github: "https://github.com/anahika/anshika-tour-and-travels",
      webLink: "/",
    },
    {
      title: "Blog Website",
      points: [
        <>
          Developed a dynamic blog website using
          <span className="span3">
            {" "}
            React.js, Bootstrap, and Firebase.{" "}
          </span>{" "}
          Utilized <span className="span3"> Redux </span> for efficient data and
          state management, ensuring a seamless user experience.
        </>,
        <>
          By prioritizing
          <span className="span3"> scalability and maintainability, </span> I
          ensured that the application's architecture is
          <span className="span3"> flexible </span> and ready for future
          expansions.
        </>,
        <>
          Delivered <span className="span3"> responsive UI </span>, ensuring
          optimal user experience on desktops, tablets, and smartphones.
        </>,
      ],
      github: "https://github.com/anahika/blog",
      webLink: "https://blog-e5e5f.web.app/",
    },
    {
      title: "Taxi Service Website",
      points: [
        <>
          Clean and intuitive layout with essential information about services,
          service areas, and contact details.
        </>,
        <>
          <span className="span3"> Lightweight </span> and{" "}
          <span className="span3"> static </span>web pages ensure swift loading
          times for a seamless user experience.
        </>,
        <>
          Developed with <span className="span3"> React </span>for efficient
          component-based architecture and enhanced interactivity. Utilizes
          <span className="span3"> Bootstrap </span> for a responsive design,
          ensuring optimal display on various devices and browsers.
        </>,
      ],
      github: "https://github.com/anahika/pk-taxi-svc",
      webLink: "https://traveltheoriz.com/",
    },
  ];
  return (
    <>
      {Myprojects.map((project, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className="row mt-4">
              <div className=" div1 p-4 ml-4">
                <h1>{project.title} </h1>
                {project.points.map((point, index) => (
                  <li key={index} className="text-left pt-2">
                    {point}
                  </li>
                ))}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info mt-3"
                >
                  Github
                </a>
                <br />
                <a
                  href={project.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info mt-3"
                >
                  {" "}
                  Web Link
                </a>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className="row justify-content-end mt-4">
              <div className=" div1 p-4">
                <h1>{project.title} </h1>
                {project.points.map((point, index) => (
                  <li key={index} className="text-left pt-2">
                    {point}
                  </li>
                ))}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info mt-3"
                >
                  Github
                </a>
                <br />
                <a
                  href={project.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info mt-3"
                >
                  {" "}
                  Web Link
                </a>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default Projects;
