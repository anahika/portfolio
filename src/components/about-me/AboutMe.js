import React from "react";
import "../CommonCss.css";

function AboutMe() {
  return (
    <>
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
          {" "}
          <h5 className="mb-3 text-warning">Hello everyone,</h5>
          <h6>
            My name is Anshika and I am a highly motivated engineer
            with a passion for solving complex problems. I am currently working
            at Publicis Sapient, where I strive to deliver innovative solutions
            to meet our clients' unique challenges. I hold a Bachelor of
            Technology degree in Computer Science from the prestigious National
            Institute of Technology, Hamirpur, where I acquired a strong
            foundation in computer programming and software development.
            <br />
            Beyond my professional pursuits, I have a diverse range of hobbies,
            with basketball being one of my favorites. Basketball is a sport
            that requires personal skill, teamwork, and speed, and I enjoy the
            challenge of bringing these elements together to achieve success on
            the court. For me, teamwork is an essential ingredient in playing
            basketball, as it promotes trust, communication, and the ability to
            work together towards a common goal.
          </h6>
          <br />
        </div>
      </div>
      <div className="row p-5 w-75 m-auto ach-div">
        <h3>
          {" "}
          Thank you for taking the time to learn more about me. I look forward
          to collaborating with you to create innovative solutions that make a
          difference.
        </h3>
      </div>
    </>
  );
}

export default AboutMe;
