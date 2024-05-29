import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
import bootsrap from "../../public/bootsrap.jpg";
import tailwind from "../../public/tailwind.jpg";
import mongodb from "../../public/mongodb.jpg";
import php from "../../public/PHP.png";
import oracle from "../../public/oracle.png";
// import java from "../../public/java.png";
// import spring from "../../public/spring.png";
// import springBoot from "../../public/springBoot.jpg";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
     
    },
    {
      id: 4,
      logo: reactjs,
      name: "React.js",
    },
    {
      id: 5,
      logo: node,
      name: "Node.js",
    },
    {
      id: 6,
      logo: bootsrap,
      name: "Bootsrap",
    },
    {
      id: 7,
      logo: tailwind,
      name: "Tailwind",
    },
    {
      id: 8,
      logo: mongodb,
      name: "Mongodb",
    },
    {
      id: 9,
      logo: php,
      name: "Php",
    },
    {
      id: 10,
      logo: oracle,
      name: "Oracle",
    },

  ];
  return (
    <div
      name="Skill"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skill</h1>
        {/* <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p> */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
