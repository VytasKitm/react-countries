import { useState, Router, Routes, Route } from "react";
import "./App.css";
import { getAllData } from "./services/getAllData";
import { ShowMoreData} from "./components/ShowMoreData.jsx"


function App() {

  return <>
      <Router>
      <Routes>
        <Route path="/" element={<ShowMoreData CountryData={countryData} />} />
        <Route path="/country/:name" element={<CountryInfo CountryData={countryData} />} />
      </Routes>
    </Router>
  </>;
}

export default App;
