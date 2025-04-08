// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowMoreData from './components/ShowMoreData';
import CountryInfo from './components/CountryInfo';
import countryData from './data/countries.json'; // arba kaip pas tave ateina

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowMoreData CountryData={countryData} />} />
        <Route path="/country/:name" element={<CountryInfo CountryData={countryData} />} />
      </Routes>
    </Router>
  );
}

export default App;

  