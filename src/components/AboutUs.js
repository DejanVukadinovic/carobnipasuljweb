import React from "react";
import background from "../static/standardBG/standardBG.png";
import logo from "../static/favicon.png";
import team_img from "../static/Pasulj_radnici";
function AboutUs() {
  return (
    <div className="h-full background-cover">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-9 mt-16">
        <div className="col-span-1 lg:p-4 lg:m-4 rounded-3xl border-primary lg:border-4 flex flex-col justify-evenly gap-8">
          <h2 className="text-4xl text-center font-bold py-4">O Nama</h2>
          <p className="lg:text-xl lg:px-4">
            Catering Čarobni pasulj osnovan je 2015. godine sa ciljem da omogući
            pristup zdravoj domaćoj ishrani u školama, vrtićima i kompanijama.
            <br />
            <br />
            Na samom početku naši glavni klijenti su bili djeca u školama i
            vrtićima. Kuhanje za djecu nosi posebnu odgovornost koja ne smije
            dovesti u pitanje sanitarne uslove, kvalitet i svježinu namirnica,
            kao i pakovanje i dostavu finalnog proizvoda.
            <br />
            <br />
            Sa razvojem potreba na tržištu, svoju ponudu smo proširili na
            privatne firme i kompanije. Stvarajući zdrave navike, od sanitarnih
            uslova do konačnog obroka, dotadašnju praksu prenijeli smo i na naše
            starije klijente.
            <br />
            <br />
            Poslujemo na široj teritoriji Banjaluke, gdje svojim klijentima
            svakodnevno isporučujemo raznovrsna domaća jela po njihovom izboru.
          </p>
          <img src={logo} className="w-48 mx-auto"></img>
        </div>
        <div className="col-span-1 lg:m-4 py-2 lg:rounded-3xl border-primary lg:border-4 border-t-4 flex justify-center flex-col">
          <h2 className="text-4xl font-bold text-center mb-2">Naš Tim</h2>
          <img src={team_img} className="" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
