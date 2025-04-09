import {React, useContext} from 'react'
import {ShowMoreData} from './ShowMoreData';
import DataContext  from '../context/DataContext.jsx'

export function Card() {
        const {data, setData} = useContext(DataContext)

  return (
        <div style={{ width: '18rem', height: '25rem', border: "black solid" }}>
                <img src={data[0]?.flags["png"]} alt="" style={{height: '10rem',width: '98%',display: "block",margin: "auto", border: "red solid"}}/>
                <p>Name: {data[0]?.name.common || "Nera"}</p>
                <p>Capital: {data[0]?.capital[0] || "Nera"}</p>
                <p>Region: {data[0]?.region || "Nera"}</p>
        <ShowMoreData CountryData={data[0]}/>
        </div>
  );
}

