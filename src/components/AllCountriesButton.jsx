import { React, useContext } from "react";
import { getAllData } from "../services/getAllData";
import DataContext from "../context/DataContext.jsx";

export const AllCountriesButton = () => {
  const { data, setData } = useContext(DataContext);

  const writeData = async () => {
    const allData = await getAllData();
    setData(allData);
  };

  return (
    <div>
      <button onClick={() => writeData()}>All</button>
    </div>
  );
};
