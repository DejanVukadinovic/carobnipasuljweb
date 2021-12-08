import React from 'react';
import instagram from '../static/instagram.png';
import facebook from '../static/facebook.png';
import linkedin from '../static/linkedin.png';

function Footer() {
	return (
		<div>
			<div className="bg-primary p-4 px-9 flex justify-center text-gray-300 bottom-0  w-full">
				<div className="flex flex-col space-y-3">
					<div className="flex text-xl space-x-8 font-bold align-middle">
						<div className="w-8 h-8 ">
							<img src={instagram} />
						</div>
						<div className="w-8 h-8 ">
							<img src={facebook} />
						</div>
						<div className="w-8 h-8 ">
							<img src={linkedin} />
						</div>
					</div>
					<div className="text-center">By Dejan Vukadinovic</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
