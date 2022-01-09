import React from "react";
import { Link } from "react-router-dom";
import logo from "../static/pasuljkov2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [responsiveMenu, setresponsiveMenu] = useState(false);
  return (
    <div className="flex flex-col  text-primary top-0 fixed w-full bg-white border-primary border-b-4 md:p-4 px-9 f">
      <div className="flex justify-between">
        <div className="flex text-xl space-x-2 font-bold align-middle">
          <div
            className="flex items-center align-middle"
            style={{ textAlign: "center" }}
          >
            <Link
              to="/"
              className="outline-none hover:border-gray-700 border-white border-b-2 hover:border-current cursor-pointer text-3xl flex items-center"
            >
              <img src={logo} className="w-16 h-16 align-middle rounded-full" />
              <h1 className="hidden md:block">Čarobni Pasulj Catering</h1>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center align-middle justify-around space-x-3 font-medium text-2xl">
          <Link
            to="/about"
            className="outline-none hover:border-gray-700 border-white border-b-2 hover:border-current cursor-pointer"
          >
            O nama
          </Link>
          <h5> / </h5>
          <Link
            to="/contact"
            className="outline-none hover:border-gray-700 border-white border-b-2 hover:border-current cursor-pointer"
          >
            Kontakt
          </Link>
          <h5> / </h5>
          <Link
            to="/menu"
            className="outline-none hover:border-gray-700 border-white border-b-2 hover:border-current cursor-pointer"
          >
            Jelovnik
          </Link>
        </div>
        <div className="flex md:hidden items-center align-middle justify-around space-x-3 font-medium text-2xl">
          <FontAwesomeIcon
            icon={faBars}
            className="block md:hidden cursor-pointer"
            onClick={() => setresponsiveMenu(!responsiveMenu)}
          />
        </div>
      </div>
      <div
        className={
          responsiveMenu
            ? "flex flex-col items-center align-middle space-x-3 font-medium text-2xl gap-4 border-primary border-t-2 min-h-screen"
            : "hidden"
        }
      >
        <div className="pt-8 pb-4 text-center">Čarobni Pasulj</div>
        <Link
          to="/about"
          className="outline-none hover:border-current cursor-pointer pt-8 pb-4"
          onClick={() => setresponsiveMenu(!responsiveMenu)}
        >
          O nama
        </Link>

        <Link
          to="/contact"
          className="outline-none hover:border-current cursor-pointer border-primary border-t-2 pt-8 pb-4"
          onClick={() => setresponsiveMenu(!responsiveMenu)}
        >
          Kontakt
        </Link>

        <Link
          to="/menu"
          className="outline-none hover:border-current cursor-pointer border-primary border-t-2 pt-8 pb-8"
          onClick={() => setresponsiveMenu(!responsiveMenu)}
        >
          Jelovnik
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
