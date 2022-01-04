import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/pasuljkov2.png';

function Navbar() {
	return (
		<div className="bg-white border-primary border-b-4 p-4 px-9 flex justify-between text-primary top-0 fixed w-full">
			<div className="flex text-xl space-x-2 font-bold align-middle">
				<img src={logo} className="w-12 h-12 align-middle rounded-full" />
				<div className="flex items-center align-middle" style={{ textAlign: 'center' }}>
				<Link to="/" className="outline-none hover:border-gray-700 border-white border-b-2 hover:border-current cursor-pointer text-3xl">
						Čarobni Pasulj Catering
					</Link>
				</div>
			</div>
			<div className="hidden md:flex items-center align-middle justify-around space-x-3 font-medium text-2xl">
				<Link to="/about" className="outline-none hover:border-gray-700 border-white border-b-2 hover:border-current cursor-pointer">
					O nama
				</Link>
				<h5> / </h5>
				<Link to="/contact" className="outline-none hover:border-gray-700 border-white border-b-2 hover:border-current cursor-pointer">
					Kontakt
				</Link>
				<h5> / </h5>
				<Link to="/menu" className="outline-none hover:border-gray-700 border-white border-b-2 hover:border-current cursor-pointer">
					Jelovnik
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
