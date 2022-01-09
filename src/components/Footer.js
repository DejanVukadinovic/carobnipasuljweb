import React from "react";
import instagram from "../static/instagram.png";
import facebook from "../static/facebook.png";
import linkedin from "../static/linkedin.png";

function Footer() {
  return (
    <div>
      <div className="bg-primary p-4 px-9 flex justify-center text-gray-300 bottom-0  w-full">
        <div className="flex flex-col space-y-3">
          <div className="flex text-xl space-x-8 font-bold align-middle">
            <a href="https://www.facebook.com/CateringCarobniPasulj">
              <img className="w-8" src={facebook}></img>
            </a>
            <a href="https://www.instagram.com/carobni.pasulj.catering/">
              <img className="w-8" src={instagram}></img>
            </a>
            <a href="https://www.linkedin.com/in/%C4%8Darobni-pasulj-1177aa221/">
              <img className="w-8" src={linkedin}></img>
            </a>
          </div>
          <div className="text-center">By Dejan Vukadinovic</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
