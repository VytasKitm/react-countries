import { useState } from "react";
import "./App.css";
import { getAllData } from "./services/getAllData";
import { getRegionData } from "./services/getRegionData";
import { RegionButton } from "./components/RegionButton";
import { DataProvider } from "./context/DataContext";

function App() {

  return <>
  <DataProvider>
    <RegionButton region={"europe"}/>
  </DataProvider>
  {/* {console.log(getRegionData("europe"))} */}
  </>;
}

export default App;
