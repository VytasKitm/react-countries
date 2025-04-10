// /components/ShowMoreData.jsx
import {React} from 'react';
import { Link } from 'react-router-dom';

export const ShowMoreData = ({ countryData }) => {

  return (
    <Link to={`/details/${countryData?.name.common}`} state={{countryData: countryData}}>
      <button className="countryBtn">More</button>
    </Link>
  );
};

