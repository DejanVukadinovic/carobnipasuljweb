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
					<h2 className='text-4xl text-center font-bold py-4'>O Nama</h2>
					<p className='text-xl px-4'>Catering carobni pasulj osnovan je 2015. goine s ciljem da omoguci pristup zdravoj domacoj ishrani u skolama, vrticima i kompanijama. 
Na samom pocetku nasi glavni klijenti su bili djeca u skolama I vrticima. Kuhanje za dijecu nosi posebnu odgovornost koja ne smije dovesti u pitanje sanitarne uslove, kvalitet I svjezinu namirnica, kao I pakovanje I dostavu finalnog proizvoda. 
Sa razvojem potreba na trzistu, svoju ponudu smo prosirili na privatne firme I kompanije. Stvarajuci zdrave navike, od sanitarnih uslova do konacnog obroka, dotadasnju praksu prenijeli smo I na nase starije klijente.
Poslujemo na siroj teritoriji banja luke, gdje svojim klijentima svakodnevno isporucujemo raznovrsna domaca jela po njihovom izboru.</p>
				</div>
				<div className="col-span-1 p-4  m-4 rounded-3xl bg-primary bg-opacity-80">
					<img src={logo} className=" w-3/4" />
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
