import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faPinterest } from "@fortawesome/free-brands-svg-icons/faPinterest";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { NAV_LINK } from "../constants";
import { Link } from "react-router-dom";

interface Props {
  children?: React.ReactNode,
}

export default function Header({children}: Props) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ position: "fixed", left: 0, top: 0 }}
      className="flex w-full bg-[rgba(0,0,0,0.6)] shadow-xl justify-between items-center h-20 px-4 text-2xl absolute z-10 text-white"
    >
      <div>
        <h1 className="block">TRAVEL. </h1>
      </div>

      {/* Middle navigation */}
      <ul className="hidden md:flex">
        {NAV_LINK.map((link) => {
          return (
            <li
              key={link.key}
              className="cursor-pointer flex gap-2 mx-8 relative group"
            >
              <Link to={link.href}>{link.label}</Link>
              <span className="inline-block absolute h-[2px] w-0 bg-white -bottom-1 transition-all duration-500 group-hover:w-full"></span>
            </li>
          );
        })}
      </ul>

      {/* End */}
      {localStorage.getItem("isLogin") != "true" ? (
        <div className="hidden md:flex justify-center items-center gap-2">
          <Link
            className="px-1 font-bold hover:text-gray-400/70 cursor-pointer"
            to="/signup"
          >
            Sign up
          </Link>
          <Link to={"/signin"}>
            <button className="button-login cursor-pointer">
              <FontAwesomeIcon icon={faUser} />
              <a  className="px-1 font-bold ">
                Login
              </a>
            </button>
          </Link>
        </div>
      ) : ( 
        children
      )}
      
      {/* screen md */}
      <div className="md:hidden z-10" onClick={handleNav}>
        {nav ? (
          <FontAwesomeIcon icon={faClose} size="2xl" className="text-black" />
        ) : (
          <FontAwesomeIcon icon={faGripLines} size="2xl" />
        )}
      </div>
      {/* moblie menu drowdown here  */}
      <div
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col text-black"
            : "absolute left-[-100%]"
        }
        onClick={handleNav}
      >
        <ul>
          <h1 className="text-3xl md:text-4xl font-bold">TRAVEL</h1>

          <li className="p-4 border-b">
            <Link to={"/homepage"}>Home</Link>
          </li>
          <li className="p-4 border-b"> Destination </li>
          <li className="p-4 border-b"> Travel </li>
          <li className="p-4 border-b"> View </li>
          <li className="p-4 border-b"> Book </li>
          <div className="flex flex-col">
            <button className="btn-bg-gradient">search</button>
            <button className="btn-bg-gradient">login</button>
          </div>
          <div className="flex justify-between my-6 px-2">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faYoutube} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faTwitter} className="icon" />
            <FontAwesomeIcon icon={faPinterest} className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}
