import React, { useState, useContext } from 'react'
import DataContext from '../context/DataContext'

const SearchComponent = () => {
  const [inputValue, setInputValue] = useState('')
  const { setData } = useContext(DataContext)

  const handleSearch = () => {
    setData(inputValue)
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchComponent
