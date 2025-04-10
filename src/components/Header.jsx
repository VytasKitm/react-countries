import React from "react";
import { RegionButton } from "./RegionButton";
import { SearchComponent } from "./SearchComponent";
import { AllCountriesButton } from "./AllCountriesButton";
import { RegionButton } from './RegionButton'
import { SearchComponent } from './SearchComponent'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="header">
      <AllCountriesButton />
      <RegionButton region={"Asia"} />
      <RegionButton region={"Europe"} />
      <RegionButton region={"Africa"} />
      <RegionButton region={"Oceania"} />
      <RegionButton region={"North America"} />
      <RegionButton region={"Antarctica"} />
      <RegionButton region={"South America"} />
      <SearchComponent />
    </div>
  );
};
