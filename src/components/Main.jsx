import {React, useContext} from 'react'
import { Card } from './Card'
import DataContext from '../context/DataContext'

export const Main = () => {
        const {data} = useContext(DataContext)
        console.log(data)


  return (
    <div className="main">
        {console.log(data)}
        {!data ? (<h2>Saliu nerasta</h2>) : 
        (data.map((country, index) => <Card key={index} countryData={country}/>))}
    </div>
  )
}
