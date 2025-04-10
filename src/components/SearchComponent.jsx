import { useState, useContext } from 'react'
import DataContext from '../context/DataContext'
import { searchByName } from '../services/searchByName'

export const SearchComponent = () => {
  const [inputValue, setInputValue] = useState('')
  const { setData } = useContext(DataContext)

  const handleSearch = async () => {
    const result = await searchByName(inputValue)
    setData(result)
  };

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

