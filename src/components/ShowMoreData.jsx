// /components/ShowMoreData.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const ShowMoreData = ({ CountryData }) => {
  return (
    <div>
      {CountryData.map((country, index) => (
        <Link
          to={`/country/${country.name.common}`}
          key={index}
        >
          <button className="countryBtn">
            {country.name.common}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ShowMoreData;
<p>Testing: {JSON.stringify(country)}</p>
