import {React, useContext} from 'react'
import { getRegionData } from '../services/getRegionData.js'
import DataContext  from '../context/DataContext.jsx'

export const RegionButton = ({region}) => {
        const {data, setData} = useContext(DataContext)

        const writeRegionData = async () => {
                const regionData = await getRegionData(region)
                setData(regionData)
        }

  return (
    <div>
        <button onClick={()=> writeRegionData()}>{region}</button>
        {console.log(data)}
    </div>
  )
}


