// /components/CountryInfo.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const CountryInfo = () => {
	const {state} = useLocation()
	const countryData = state?.countryData
	
	if (!countryData) return <p>Šalis nerasta.</p>;

	const {
		flags,
		capital,
		name,
		continents,
		population,
		area,
		currencies,
		languages,
		borders,
	} = countryData;

	return (
		<div className="countryInfo">
			<img src={flags["png"]} alt={`Vėliava: ${name.common}`}/>
			<h1>{name.common}</h1>
			<p><strong>Sostinė(s):</strong> {capital?.map((el,id)=><span key={id}>{el}. </span>) || "Nėra"}</p>
			<p><strong>Regionas:</strong> {continents?.map((el,id)=><span key={id}>{el}. </span>) || "Nėra"}</p>
			<p><strong>Gyventojų kiekis:</strong> {population}</p>
			<p><strong>Plotas:</strong> {area} km²</p>
			<p><strong>Valiuta:</strong> {Object?.values(currencies || {}).map(c => c.name).join(', ') || "Nėra"}</p>
			<p><strong>Kalbos:</strong> {Object?.values(languages || {}).join(', ') || "Nėra"}</p>
			<p><strong>Kaimynai:</strong> {borders && borders.map((el,id)=><span key={id}>{el}. </span>) || "Nėra"}</p>
			<Link to={`/`}>
				<button>Grįžti</button>
			</Link>
		</div>
	);
};

