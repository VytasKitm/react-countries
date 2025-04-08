import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((json) => {
        setData(json)
      })
      .catch((err) => {
        console.error('Error fetching countries:', err)
      })
  }, [])

  return (
    <DataContext.Provider value={{ data, setData}}>
      {children}
    </DataContext.Provider>
  );
};
