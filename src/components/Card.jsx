import {React} from 'react'
import {ShowMoreData} from './ShowMoreData';

export function Card({countryData}) {
  return (
        <div style={{ width: '18rem', height: '25rem', border: "black solid" }}>
                <img src={countryData?.flags["png"]} alt="" style={{height: '10rem',width: '98%',display: "block",margin: "auto", border: "red solid"}}/>
                <p>Name: {countryData?.name.common || "Nera"}</p>
                <p>Capital: {countryData.capital?.map((el, index) => <span key={index}>{el}. </span>) || "Nera"}</p>
                <p>Region: {countryData?.region || "Nera"}</p>
        <ShowMoreData countryData={countryData}/>
        </div>
  );
}

