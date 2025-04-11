import { React, useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import DataContext from "../context/DataContext";

export const Main = () => {
  const { data } = useContext(DataContext);
  const [dataSorted, setDataSorted] = useState([]) 

  useEffect(() => {
        if (!data) {return}
        const sorted = [...data].sort((a,b) => {
                return a.name.common.localeCompare(b.name.common)
        })
        setDataSorted(sorted)
        
        console.log("Sorted Array:")
        console.log(sorted)
  },[data])

  return (
    <div className="main">
      {console.log(data)}
      {!data ? (
        <h2>Šalių nerasta!</h2>
      ) : (
        dataSorted.map((country, index) => <Card key={index} countryData={country} />)
      )}
    </div>
  );
};
