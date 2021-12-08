import React from 'react';
import HomepageBG from '../static/homepageBG/homepageBG.jpg';

function Homepage() {
	return (
		<React.Fragment>
			<div
				className="h-full grid grid-cols-2 p-8 bg-cover"
				style={{ background: `url(${HomepageBG})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
			>
				<div className="flex justify-items-center items-center align-middle">
					<div className="bg-primary bg-opacity-80 min-w-3/5 h-3/5 m-auto rounded-3xl p-5 flex flex-col justify-around">
						<h2 className="text-gray-300 font-bold text-4xl">Čarobni Pasulj</h2>
						<div className="text-2xl">
							<h6 className="text-gray-300 ">Domaće</h6>
							<h6 className="text-gray-300 ">Svježe</h6>
							<h6 className="text-gray-300 ">Čarobno</h6>
						</div>
						<a className="text-primary border-primary border-2 rounded-full text-2xl bg-gray-300 opacity-100 p-2 text-center hover:bg-primary hover:text-gray-300 cursor-pointer hover:bg-opacity-80 hover:border-gray-300">
							Kontaktirajte nas
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Homepage;
