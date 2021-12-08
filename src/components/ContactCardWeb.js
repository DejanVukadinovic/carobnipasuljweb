import React from 'react';

function ContactCardWeb(props) {
	return (
		<div className="w-full h-full bg-opacity-80 bg-primary p-4 rounded-3xl">
			<div className="text-gray-300 font-bold text-3xl pb-4 text-center">{props.name}</div>
			<div className="bg-transeperant mx-auto w-3/4 rounded-2xl" style={{ height: '85%' }}>
				<div className="bg-red-600 w-full rounded-2xl" style={{ height: '90%' }}>
					Glavna slika
				</div>
				<div className="rounded-full bg-yellow-500 w-16 h-16 transform -translate-y-8 mx-auto" />
			</div>
		</div>
	);
}

export default ContactCardWeb;
