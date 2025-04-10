import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import { RegionButton } from "./components/RegionButton";
import { DataProvider } from "./context/DataContext";
import { CountryInfo} from "./components/CountryInfo"
import { SearchComponent } from "./components/SearchComponent";
import { Main } from "./components/Main";

function App() {

  return <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <DataProvider>
                      <RegionButton region={"europe"}/>
                      <RegionButton region={"asia"}/>
                      <RegionButton region={"africa"}/>
                      <SearchComponent/>
                      <Main/>
          </DataProvider>
        } />
        <Route path="/details/:name" element={<CountryInfo/>} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
