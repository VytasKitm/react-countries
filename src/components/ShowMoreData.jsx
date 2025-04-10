// /components/ShowMoreData.jsx
import {React} from 'react';
import { Link } from 'react-router-dom';

export const ShowMoreData = ({ CountryData }) => {

  return (
    <Link to={`/details/${CountryData?.name.common}`} state={{countryData: CountryData}}>
      <button className="countryBtn">More</button>
    </Link>
  );
};

