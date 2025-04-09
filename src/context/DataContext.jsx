import React, { createContext, useState, useEffect } from 'react'


const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [data, updateData] = useState([])
  
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
