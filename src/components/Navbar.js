import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/pasuljkov2.png';

function Navbar() {
	return (
		<div className="bg-primary p-4 px-9 flex justify-between text-gray-300 top-0 fixed w-full">
			<div className="flex text-xl space-x-2 font-bold align-middle">
				<img src={logo} className="w-12 h-12 align-middle rounded-full border-white border-2" />
				<div className="flex items-center align-middle" style={{ textAlign: 'center' }}>
					<Link to="/" className="hover:text-gray-500">
						Čarobni Pasulj Catering
					</Link>
				</div>
			</div>
			<div className="flex items-center align-middle justify-around space-x-3 font-medium">
				<Link to="/about" className="hover:text-gray-500 cursor-pointer">
					O nama
				</Link>
				<h5> / </h5>
				<Link to="/contact" className="hover:text-gray-500 cursor-pointer">
					Kontakt
				</Link>
				<h5> / </h5>
				<Link to="/menu" className="hover:text-gray-500 cursor-pointer">
					Jelovnik
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
