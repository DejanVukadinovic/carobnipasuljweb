import React, { useState, useEffect } from 'react';
import { jelovnikOdrasli } from '../data/data';
import AdultMenu from './AdultMenu';
import KidsMenu from './KidsMenu';
import background from '../static/standardBG/standardBG.png';

function FoodMenu() {
	const jelovnik = Object.entries(jelovnikOdrasli);
	const [ menu, setmenu ] = useState(false);

	const Jelovnik = jelovnik.map((dan, ind) => {
		return (
			<div>
				{dan[1].map((jelo, i) => {
					const border = ind ? ' border-l-2' : '';
					return (
						<div className="py-2 border-gray-400 border-b-2">
							<div className={'text-center p-2 border-gray-400' + border}>{jelo}</div>
						</div>
					);
				})}
			</div>
		);
	});
	return (
		<div
			className="h-full background-cover bg-opacity-20"
			style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
		>
			<div className="mt-12 pt-11 px-4">
				<div className="p-2 flex justify-center text-2xl mb-4">
					<div className="bg-primary text-gray-300 w-1/3 flex justify-around p-2 rounded-full">
						<div
							onClick={(e) => {
								setmenu(0);
							}}
							className={
								menu ? (
									'cursor-pointer hover:text-gray-500'
								) : (
									'cursor-pointer hover:text-gray-500 font-medium  border-b-2 border-gray-300'
								)
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
								menu ? (
									'cursor-pointer hover:text-gray-500 font-medium  border-b-2 border-gray-300'
								) : (
									'cursor-pointer hover:text-gray-500 '
								)
							}
						>
							Djeca
						</div>
					</div>
				</div>
				<div className="bg-primary bg-opacity-70 p-4 rounded-3xl text-gray-300">
					{menu ? <KidsMenu /> : <AdultMenu />}
				</div>
			</div>
		</div>
	);
}

export default FoodMenu;
