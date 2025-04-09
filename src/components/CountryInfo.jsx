// /components/CountryInfo.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const CountryInfo = () => {
  const {state} = useLocation()
  const countryData = state?.countryData
  console.log("country info country data")
  console.log(countryData)
  
  if (!countryData) return <p>Šalis nerasta.</p>;

  const {
    flags,
    capital,
    name,
    region,
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
      <strong>Sostinė(s):</strong> {capital.map((el,id)=><p key={id}>{el}</p>)}
      <p><strong>Regionas:</strong> {region}</p>
      <p><strong>Gyventojų kiekis:</strong> {population}</p>
      <p><strong>Plotas:</strong> {area} km²</p>
      <p><strong>Valiuta:</strong> {Object.values(currencies || {} ).map(c => c.name).join(', ')}</p>
      <p><strong>Kalbos:</strong> {Object.values(languages || {}).join(', ')}</p>
      {borders.length > 0 && (
        <p><strong>Kaimynai:</strong> {borders.join(', ')}</p>
      )}
      <Link to={"/"}>
        <button>Grįžti</button>
      </Link>
    </div>
  );
};

