import React from 'react';
import background from '../static/standardBG/standardBG.png';
import ContactCardWeb from './ContactCardWeb';

function ContactPage() {
	return (
		<div
			className="h-full background-cover bg-opacity-80"
			style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
		>
			<div className="grid grid-cols-3 p-9 mt-12 h-full">
				<div className="col-span-1 h-full m-4 ">
					<ContactCardWeb name="Facebook" />
				</div>
				<div className="col-span-1 h-full m-4 ">
					<ContactCardWeb name="Telefon" />
				</div>
				<div className="col-span-1 h-full m-4 ">
					<ContactCardWeb name="E-mail" />
				</div>
			</div>
		</div>
	);
}

export default ContactPage;
