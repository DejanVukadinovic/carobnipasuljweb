import React from "react";
import HomepageBG from "../static/homepageBG/homepageBG.jpg";
import HomepageBGsmall from "../static/homepageBG/homepageBGsmall.png";
import logo from "../static/favicon.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <React.Fragment>
      <div className="h-full hidden md:grid grid-cols-2 p-8 bg-cover mt-16">
        <div className=" min-w-3/5 h-3/5 m-auto rounded-3xl p-5 flex flex-col justify-around col-span-1 gap-6">
          <h2 className="text-primary font-bold text-8xl">
            Čarobni Pasulj
            <br />
            Catering
          </h2>
          <div className="text-4xl text-primary">
            <h6>Domaće</h6>
            <h6>Svježe</h6>
            <h6>Čarobno</h6>
          </div>
          <Link
            to="/contact"
            className="text-4xl text-gray-200 border-primary border-2 rounded-full bg-primary opacity-100 p-4 text-center hover:bg-white hover:text-primary cursor-pointer hover:border-primary"
          >
            Kontaktirajte nas
          </Link>
        </div>
        <div className="cols-span-1 hidden lg:flex align-middle p-8 justify-end">
          <img src={logo}></img>
        </div>
        <div className="cols-span-1 flex lg:hidden h-80 align-middle p-8 justify-end">
          <img src={logo}></img>
        </div>
      </div>

      <div className="h-full flex md:hidden flex-col gap-6 justify-around p-8 bg-cover min-h-screen mt-8">
        <div>
          <h2 className="text-primary font-bold text-6xl">
            Čarobni Pasulj
            <br />
            Catering
          </h2>
          <div className="text-3xl text-primary mt-4 flex justify-around place-items-end">
            <div className>
              <h6>Domaće</h6>
              <h6>Svježe</h6>
              <h6>Čarobno</h6>
            </div>
            <img className="w-48" src={logo}></img>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl text-primary font-bold text-center">
            Kontaktirajte nas
          </h3>
          <a
            href="mailto:catering.carobni.pasulj@gmail.com"
            className="border-primary border-t-2 border-b-2 px-4"
          >
            <h4 className="text-xl p-2">E-Mail:</h4>
            <h5 className="text-lg p-2">catering.carobni.pasulj@gmail.com</h5>
          </a>
          <a href="tel:+38765468338" className="border-primary border-b-2 px-4">
            <h4 className="text-xl p-2">Broj telefona:</h4>
            <h5 className="text-lg p-2">+(387) 65 - 468 / 338</h5>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Homepage;
