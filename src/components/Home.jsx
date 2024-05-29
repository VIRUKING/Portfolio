import React from "react";

// import pic from "../../public/photo.avif";
import pic from "../../public/IMG_20240529_124404.jpg";
import { IoIosCall } from "react-icons/io";
// import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi, I'm Viraj Pankhaniya, a skilled web developer with expertise
              in HTML5, CSS3, JavaScript, and responsive design. I specialize in
              building dynamic web applications using frameworks like React.js
              ,ensuring top-notch user experiences. With a strong
              backend development background in Node.js and Express, I
              seamlessly integrate RESTful APIs for efficient data exchange. I'm
              dedicated to utilizing cutting-edge technologies like MongoDB and
              MySQL for robust database management in all my web development
              projects.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/viraj-pankhaniya-bbb775269/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="tel:878-092-2238" target="_blank">
                      <IoIosCall className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.codechef.com/users/d22it186" target="_blank">
                      <SiCodechef className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://www.codechef.com/users/d22it186" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li> */}
                </ul>
              </div>
              


              
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
