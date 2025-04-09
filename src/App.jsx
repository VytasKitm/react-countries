import { useState, Route, Router, Routes } from "react";
import "./App.css";
import { getAllData } from "./services/getAllData";
import { getRegionData } from "./services/getRegionData";
import { RegionButton } from "./components/RegionButton";
import { DataProvider } from "./context/DataContext";
import { Card } from "./components/Card"

function App() {

  return <>
  <DataProvider>
    <RegionButton region={"europe"}/>
    <Card/>
    {/* <Router>
      <Routes>
        <Route path="/" element={<ShowMoreData CountryData={countryData} />} />
        <Route path="/country/:name" element={<CountryInfo CountryData={countryData} />} />
      </Routes>
    </Router> */}
  </DataProvider>
  {/* {console.log(getRegionData("europe"))} */}
  </>;
}

export default App;
