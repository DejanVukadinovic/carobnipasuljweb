import React from "react";
import logo from "../static/favicon.png";
import instagram from "../static/instagram.png";
import facebook from "../static/facebook.png";
import linkedin from "../static/linkedin.png";

function ContactCardWeb(props) {
  return (
    <div className="w-full h-full lg:p-4 rounded-3xl">
      <div className="text-gray-700 font-bold text-3xl pb-4 text-center">
        {props.name}
      </div>
      <div
        className="bg-transeperant mx-0 lg:mx-auto w-full lg:w-3/4 rounded-2xl"
        style={{ height: "85%" }}
      >
        <div
          className="lg:shadow-md appearance-none w-full h-full rounded flex flex-col gap-6 lg:px-8 min-h-fit"
          style={{ height: "90%" }}
        >
          <img src={logo} className="w-1/3 mx-auto" />
          <h3 className="text-4xl text-primary font-bold text-center">
            Čarobni Pasulj Catering
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
          <div className="flex justify-around mt-4 px-8">
            <a href="https://www.facebook.com/CateringCarobniPasulj">
              <img className="w-16" src={facebook}></img>
            </a>
            <a href="https://www.instagram.com/carobni.pasulj.catering/">
              <img className="w-16" src={instagram}></img>
            </a>
            <a href="https://www.linkedin.com/in/%C4%8Darobni-pasulj-1177aa221/">
              <img className="w-16" src={linkedin}></img>
            </a>
          </div>
        </div>
        {/* <div className="rounded-full bg-yellow-500 w-24 h-24 transform -translate-y-12 mx-auto" /> */}
      </div>
    </div>
  );
}

export default ContactCardWeb;
