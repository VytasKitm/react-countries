import { React } from "react";
import { ShowMoreData } from "./ShowMoreData";

export function Card({ countryData }) {
  const regionColors = {
    Europe: "#FF5733",
    Asia: "#2980B9",
    Africa: "#27AE60",
    Americas: "#F39C12",
    Oceania: "#1ABC9C",
    Antarctica: "#BDC3C7",
    "North America": "#E74C3C",
    "South America": "#D35400",
  };
  return (
    <div
      className="card"
      style={{
        backgroundColor: regionColors[countryData?.continents[0]],
      }}>   
      <div className="imgContainer">
        <img src={countryData?.flags["png"]} alt="" />
        </div>
      <h1> {countryData?.name.common || "Nera"}</h1>
      <p>
        Capital:
        {countryData.capital?.map((el, index) => (
          <span key={index}> {el}. </span>
        )) || "Nera"}
      </p>
      <p>Region: {countryData?.region || "Nera"}</p>
      <ShowMoreData countryData={countryData} />
    </div>
  );
}
