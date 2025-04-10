import React from 'react'
import { RegionButton } from './RegionButton'
import { SearchComponent } from './SearchComponent'

export const Header = () => {
  return (
    <div className='header'>
        <RegionButton region={"Asia"}/>
        <RegionButton region={"Europe"}/>
        <RegionButton region={"Africa"}/>
        <RegionButton region={"Oceania"}/>
        <RegionButton region={"North America"}/>
        <RegionButton region={"Antarctica"}/>
        <RegionButton region={"South America"}/>
        <SearchComponent/>
    </div>
  )
}
