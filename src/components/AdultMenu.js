import React, { useState, useEffect } from "react";
import { jelovnikOdrasli } from "../data/data";

function AdultMenu() {
  const jelovnik = Object.entries(jelovnikOdrasli);
  const JelovnikList = [];
  const [dropMobile, setdropMobile] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  for (let i = 0; i < 4; i++) {
    jelovnik.forEach((obj, ind) => {
      const border = ind ? " border-l-2" : "";
      const bottom = i === 3 ? "" : " border-b-4";

      JelovnikList.push(
        <div className={"py-2 border-primary " + bottom}>
          <div
            className={
              "text-center p-2 border-primary text-xl py-3 h-full" + border
            }
          >
            {obj[1][i]}
          </div>
        </div>
      );
    });
  }

  const Jelovnik = jelovnik.map((dan, ind) => {
    console.log(dropMobile[ind], dropMobile.ind);
    return (
      <div className="border-primary border-b-2">
        <div
          className="text-2xl cursor-pointer  p-4"
          onClick={() => {
            let newState = dropMobile;
            newState[ind] = !dropMobile[ind];
            setdropMobile({ ...newState });
          }}
        >
          {dan[0]}
        </div>
        {dan[1].map((jelo, i) => {
          return (
            <div
              className={
                dropMobile[ind]
                  ? i === dan[1].length - 1
                    ? "py-2 "
                    : "py-2 border-gray-400 border-b-2"
                  : "hidden"
              }
            >
              <div className={"text-center p-2 border-gray-400"}>{jelo}</div>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="hidden lg:block px-4">
        <div className="flex flex-col text-primary">
          <div className="grid grid-cols-6 border-primary border-b-4 py-2">
            <div className="col-span-1 text-3xl py-4 text-center border-primary">
              Ponedeljak
            </div>
            <div className="col-span-1 text-3xl py-4 text-center border-primary border-l-2">
              Utorak
            </div>
            <div className="col-span-1 text-3xl py-4 text-center border-primary border-l-2">
              Srijeda
            </div>
            <div className="col-span-1 text-3xl py-4 text-center border-primary border-l-2">
              Četvrtak
            </div>
            <div className="col-span-1 text-3xl py-4 text-center border-primary border-l-2">
              Petak
            </div>
            <div className="col-span-1 text-3xl py-4 text-center border-primary border-l-2">
              Subota
            </div>
          </div>
          <div className="grid grid-cols-6">{JelovnikList} </div>
        </div>
      </div>
      <div className="block lg:hidden text-primary">{Jelovnik}</div>
    </React.Fragment>
  );
}

export default AdultMenu;
