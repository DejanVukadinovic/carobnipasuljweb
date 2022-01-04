import React from 'react';
import HomepageBG from '../static/homepageBG/homepageBG.jpg';
import HomepageBGsmall from '../static/homepageBG/homepageBGsmall.png';
import logo from '../static/favicon.png'
import { Link } from 'react-router-dom';



function Homepage() {
	return (
		<React.Fragment>
			<div
				className="h-full hidden lg:grid grid-cols-2 p-8 bg-cover"
				
			>
				
				<div className=" min-w-3/5 h-3/5 m-auto rounded-3xl p-5 flex flex-col justify-around col-span-1">
						<h2 className="text-primary font-bold text-8xl">Čarobni Pasulj<br/>Catering</h2>
						<div className="text-4xl text-primary">
							<h6  >Domaće</h6>
							<h6  >Svježe</h6>
							<h6  >Čarobno</h6>
						</div>
						<Link to="/contact" className="text-4xl text-gray-200 border-primary border-2 rounded-full bg-primary opacity-100 p-4 text-center hover:bg-white hover:text-primary cursor-pointer hover:border-primary">
							Kontaktirajte nas
						</Link>
					</div>
					<div className='cols-span-1 flex align-middle p-8'><img src={logo} ></img>
				</div></div>
					
				
			
			<div
				className="h-full grid lg:hidden grid-cols-2 p-8 bg-cover"
				style={{ background: `url(${HomepageBGsmall})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
			>
				<div className="flex justify-items-center items-center align-middle">
					<div className="bg-primary bg-opacity-80 min-w-3/5 h-3/5 m-auto rounded-3xl p-5 flex flex-col justify-around">
						<h2 className="text-gray-300 font-bold text-4xl">Čarobni Pasulj</h2>
						<div className="text-2xl">
							<h6 className="text-gray-300 ">Domaće</h6>
							<h6 className="text-gray-300 ">Svježe</h6>
							<h6 className="text-gray-300 ">Čarobno</h6>
						</div>
						<Link to="/contact" className="text-primary border-gray-200 border-2 rounded-full text-2xl bg-gray-200 opacity-100 p-2 text-center hover:bg-white hover:text-primary cursor-pointer hover:border-primary">
							Kontaktirajte nas
						</Link>
					</div>
				</div>
				
			</div>
		</React.Fragment>
	);
}

export default Homepage;
