import React, { useState, useEffect } from "react";
import { jelovnikOdrasli } from "../data/data";
import AdultMenu from "./AdultMenu";
import KidsMenu from "./KidsMenu";
import background from "../static/standardBG/standardBG.png";

function FoodMenu() {
  const jelovnik = Object.entries(jelovnikOdrasli);
  const [menu, setmenu] = useState(false);

  return (
    <div className="h-full background-cover ">
      <div className="mt-32 pt-14 px-4">
        <div className="p-2 flex justify-center text-2xl mb-4">
          <div className="border-primary border-b-4 text-primary w-4/5 lg:w-1/3 flex justify-around p-2">
            <div
              onClick={(e) => {
                setmenu(0);
              }}
              className={
                menu
                  ? "cursor-pointer hover:text-gray-500"
                  : "cursor-pointer hover:text-gray-500 font-medium  border-b-4 border-primary"
              }
            >
              Odrasli
            </div>
            <div>/</div>
            <div
              onClick={(e) => {
                setmenu(1);
              }}
              className={
                menu
                  ? "cursor-pointer hover:text-gray-500 font-medium  border-b-4 border-primary"
                  : "cursor-pointer hover:text-gray-500 "
              }
            >
              Djeca
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className="block p-4 rounded-3xl text-gray-300">
            {menu ? <KidsMenu /> : <AdultMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;
