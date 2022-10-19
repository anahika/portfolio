import React from "react";
import "../CommonCss.css";

function AboutMe() {
  return (
    <div className="row text-left mt-4 align-items-center justify-content-center">
      <div className="col-1"></div>
      <div className="col-sm-6 col-md-4 pl-4 div1">
        <img src={process.env.PUBLIC_URL + "/intro.png"} alt="intro" />
        <h4>Education</h4>

        <h6>
          <strong>NIT Hamirpur(2018-2022)</strong>
          <br />
          <span className="span1">Bachelor of Technology </span>
          <br />
          <span className="span2">
            Department of Computer Science and Engineering
          </span>
          <br />
          <span className="span3">CGPA: 8.69</span>
        </h6>
        <h6>
          <strong>JNV Paprola</strong>
          <br />
          <span className="span1">CBSE (XII) Board Examination - 2018</span>
          <br />
          <span className="span2">CBSE (X) Board Examination - 2016</span>
          <br />
          <span className="span3">Percentage: 93.00</span>
        </h6>
      </div>
      <div className="col-1"></div>
      <div className="col-sm-11 col-md-6 div1 p-4">
        <h6>
          {" "}
          Hi everyone, My name is Anshika and I’m a software developer. I work
          at Publicis Sapient. My background is in computer science. Before
          joining this company, I completed my B.Tech from National Institute of
          Technology, Hamirpur. I’m excited to work at Publicis Sapient to solve
          our clients’ biggest challenges!
          <br />
          Talking about my technical experience I have contributed to the
          development of a Full Stack web-based project named Tradezy (which
          automates the process of buying and selling stocks or forex in
          financial markets for trader/investor). In this project I have worked
          on both front-end (Build login, user-profile and watchlist screen
          using React.js and Bootstrap and also integrated it with backend using
          axios, worked on unit testing for these components using React Testing
          Library) and the back-end part (Implemented Restful Web Services for
          the given project, used JPA with entity beans for the interacting
          persistence layer for CRUD operations, used SLF4J and Sleuth for
          logging and Zipkin for tracing, and used Mockito for writing unit test
          cases).
          <br /> I have many hobbies, and basketball is one of the hobbies I
          have. Basketball is sport that requires personal skill, team work and
          speed. Basketball is a great sport, I enjoy every time when I
          crossover the opponent, and then I score. Team work is one of the
          important key to play basketball.
          <br />
        </h6>
      </div>
    </div>
  );
}

export default AboutMe;
