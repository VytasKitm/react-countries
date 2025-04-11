import { useState } from "react";
import "./style.css";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import { DataProvider } from "./context/DataContext";
import { CountryInfo} from "./components/CountryInfo"
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer"

function App() {

  return <>
    <BrowserRouter>
      <DataProvider>  
      <Routes>
        <Route path="/" element={<><Header/><Main/><Footer/></>} />
        <Route path="/details/:name" element={<CountryInfo/>} />
      </Routes>
      </DataProvider>
    </BrowserRouter>
  </>;
}

export default App;
