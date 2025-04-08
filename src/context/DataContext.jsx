import React, { createContext, useState, useEffect } from 'react'


const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [data, updateData] = useState([])
  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setData(json)
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching countries:', err)
  //     })
  // }, [])

  const setData = (newData) => {
    updateData((newData))
  }

  return (
    <DataContext.Provider value={{ data, setData}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
