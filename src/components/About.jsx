import React from "react";
// import picc from "../../public/charusat.jpg";
// import css from "../../src/index.css";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
      
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          WORK EXPERIENCE
        </h1>
        <span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 ">
            <div className=" md:w-[600px] md:h-[400px] border-[2px] margin-left: 20px; margin-right: 20px; shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 ">
              <b>Web Development</b> <br></br>
              company - <b>CodSoft</b>
              <br></br>
              Duration - 05/2024-Present <br></br>
              Achievements-<br></br>
              <br></br>
              <p className="text-justify">
                &ensp;-Excelled in web development tasks at CodSoft, showcasing
                expertise across multiple programming languages and frameworks;
                improved website load time by 40% and enhanced user engagement
                by 25% through optimized code. <br />
                &ensp;-Spearheaded the adoption of industry-leading coding
                practices, resulting in a 25% decrease in website maintenance
                costs and a 30% increase in customer engagement metrics.
              </p>
            </div>
            <div className=" md:w-[600px] md:h-[400px] border-[2px] margin-left: 20px; shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
              <b>Front-end Development</b> <br></br>
              company - <b>Spark to ideas</b>
              <br></br>
              Duration - 05/2023 - 06/2023 <br></br>
              Achievements-<br></br>
              <br></br>
              <p className="text-justify">
                &ensp;-Completed a one-month internship at Spark to Ideas, where
                React.js was used to develop responsive, interactive user
                interfaces, enhancing user engagement by 20% and reducing page
                load times by 15%. <br />
                &ensp;-Developed scalable front-end components in React.js,
                subsequently boosting user retention rates by 20% and conversion
                rates by 15%<br/>
                &ensp;-Collaborated with development team to implement Agile
                methodologies, resulting in a 40% increase in sprint velocity
                and on-time project delivery across all product releases.
              </p>
            </div>
          </div>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Education</h1>
        <span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 ">
            <div className=" md:w-[500px] md:h-[200px] border-[2px] margin-left: 20px; shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 ">
              <b>B-Tech</b> <br></br><br></br>
              College:- Charotar University of Science and Technology<br></br>
              Course Field:- Information Technology <br></br>
              Duration:- 2022-Present <br></br>
            </div>
            <div className=" md:w-[400px] md:h-[200px] border-[2px] margin-left: 20px; shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
              <b>Diploma</b> <br></br><br></br>
              College:- Government Polytechnic Porbandar<br></br>
              Course Field:- Computer Engineering<br></br>
              Duration:- 2019 - 2022 <br></br>
            </div>
          </div>
        </span>
        <br />
        <br />

        <br />
        
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          <p>
            {" "}
            <b>udemy </b>&ensp;-The Complete Web Development Bootcamp
          </p>
          <p>
            <b>NPTEL</b>&ensp;-OPERATING SYSTEM FUNDAMENTALS,DBMS
          </p>
          <p>
            <b>HackerRank</b>&ensp;- javascript-basic
          </p>
          <p>
            <b>Coursera(google)</b>&ensp;- Foundations of User Experience (UX)
            Design
          </p>
          <br></br>
        </span>
      </div>
    </div>
  );
}

export default About;
