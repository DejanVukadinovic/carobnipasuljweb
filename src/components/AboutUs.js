import React from 'react';
import background from '../static/standardBG/standardBG.png';
import logo from '../static/pasuljkov2.png';
function AboutUs() {
	return (
		<div
			className="h-full background-cover"
			style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
		>
			<div className="grid grid-cols-2 p-9 mt-12">
				<div className="col-span-1 p-4  m-4 rounded-3xl bg-primary bg-opacity-80">
					<img src={logo} className=" w-3/4" />
				</div>
				<div className="col-span-1 p-4  m-4 rounded-3xl bg-primary bg-opacity-80">
					<img src={logo} className=" w-3/4" />
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
