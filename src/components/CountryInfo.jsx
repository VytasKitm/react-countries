// /components/CountryInfo.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CountryInfo = ({ CountryData }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  const country = CountryData.find(
    (c) => c.name.common === name
  );

  if (!country) return <p>Šalis nerasta.</p>;

  const {
    flags,
    name: { common },
    capital,
    region,
    population,
    area,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <div className="countryInfo">
      <img src={flags.svg} alt={`Vėliava: ${common}`} />
      <h1>{common}</h1>
      <p><strong>Sostinė:</strong> {capital?.[0]}</p>
      <p><strong>Regionas:</strong> {region}</p>
      <p><strong>Gyventojų kiekis:</strong> {population.toLocaleString()}</p>
      <p><strong>Plotas:</strong> {area.toLocaleString()} km²</p>
      <p><strong>Valiuta:</strong> {Object.values(currencies || {}).map(c => c.name).join(', ')}</p>
      <p><strong>Kalbos:</strong> {Object.values(languages || {}).join(', ')}</p>
      {borders?.length > 0 && (
        <p><strong>Kaimynai:</strong> {borders.join(', ')}</p>
      )}
      <button onClick={() => navigate('/')}>Grįžti</button>
    </div>
  );
};

export default CountryInfo;
