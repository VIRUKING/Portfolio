import React from "react";

import DigitalMenu from "../../public/Digital_Menu.png";
import online from "../../public/online.png";
import blode from "../../public/blode1.png";
import { Link } from "react-scroll";
function portFolio() {
  const cardItem = [
    {
      id: 1,
      logo: DigitalMenu,
      name: "Digital Menu",
      ds: (
        <p>
          &#x2022; Redefined the ordering experience by introducing QR code
          functionality, enabling users to seamlessly place orders by scanning
          codes. <br />
          <br />
          &#x2022; Technologies used: JavaScript, HTML, CSS, Tailwind CSS,
          React, Node.js, MongoDB
        </p>
      ),
      videoLink:
        "https://drive.google.com/file/d/1MAlZeMNm3QPQjeNRbaPq0Y7cWIXZ6hUm/view?usp=sharing",
        sourceCodeLink: "https://github.com/VIRUKING/DigitalMenu/",
    },
    {
      id: 2,
      logo: online,
      name: "ONLINE EXAMINATION SYSTEM",
      ds: (
        <p>
          &#x2022; Led the front-end development of an Online Examination
          System, improving user experience by 40% with a user-friendly
          interface. <br />
          <br />
          &#x2022; Developed and launched theme mode options, integrated a
          countdown feature, and randomized multiple-choice questions per user,
          resulting in a 30% increase in user satisfaction and completion rates{" "}
          <br />
          <br /> &#x2022; Technologies used: HTML, CSS, JavaScript, Bootstrap,
          PHP, SQL.
        </p>
      ),
      videoLink: "https://drive.google.com/file/d/1eInY9HvPrX54NNWOt0h3ziZYreib6zeA/view?usp=sharing",
      sourceCodeLink: "https://github.com/VIRUKING/online-examination",
    },
    {
      id: 3,
      logo: blode,
      name: "BLOODBANK MANAGEMENT SYSTEM",
      ds: (
        <p>
          &#x2022; Designed and deployed a comprehensive management system with
          user and admin panels; improved blood donor and recipient management
          efficiency by 40%, facilitating seamless data entry, updates, and
          deletions. <br />
          <br />
          &#x2022; Technologies used:HTML, CSS, Bootstrap, PHP, SQL, MySQL
        </p>
      ),
      videoLink: "https://drive.google.com/file/d/1rmg8LjXE71H2DxBmC94IvltorCib4eDz/view?usp=sharing",
      sourceCodeLink: "https://github.com/VIRUKING/blood-donor-management-system",
    },
  ];
  return (
    <div
      name="Pojects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        {/* <span className=" underline font-semibold">Projects</span> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
          {cardItem.map(({ id, logo, name, ds, videoLink ,sourceCodeLink}) => (
            <div
              className="md:w-[600px] md:h-[700px]  border-[2px]  shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} alt="" />
              <div>
                <div className="px-2 font-bold text-xl mb-2">
                  <br></br>
                  {name}
                  <br></br>
                </div>
                <p className="px-2 text-gray-700 text-justify">{ds}</p>
              </div>

              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href={videoLink} target="_blank">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Video
                  </button>
                </a>
                <a href={sourceCodeLink} target="_blank">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default portFolio;
