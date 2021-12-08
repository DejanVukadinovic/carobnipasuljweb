import React from 'react';
import { jelovnikDjeca } from '../data/data';

function KidsMenu() {
	const jelovnik = Object.entries(jelovnikDjeca);
	const Jelovnik = jelovnik.map((dan, ind) => {
		return (
			<div>
				{dan[1].map((jelo, i) => {
					const border = ind ? ' border-l-2' : '';
					const bottom = i == dan[1].length - 1 ? '' : ' border-b-2';
					return (
						<div className={'py-2 border-gray-400' + bottom}>
							<div className={'text-center p-2 border-gray-400' + border}>{jelo}</div>
						</div>
					);
				})}
			</div>
		);
	});
	return (
		<div className="px-4">
			<div className="flex flex-col">
				<div className="grid grid-cols-5 border-gray-300 border-b-2 py-2">
					<div className="col-span-1 text-center border-gray-400">Ponedeljak</div>
					<div className="col-span-1 text-center border-gray-400 border-l-2">Utorak</div>
					<div className="col-span-1 text-center border-gray-400 border-l-2">Srijeda</div>
					<div className="col-span-1 text-center border-gray-400 border-l-2">Cetvrtak</div>
					<div className="col-span-1 text-center border-gray-400 border-l-2">Petak</div>
				</div>
				<div className="grid grid-cols-5">{Jelovnik} </div>
			</div>
		</div>
	);
}

export default KidsMenu;
