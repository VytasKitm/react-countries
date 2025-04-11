import { useState, useContext } from "react";
import DataContext from "../context/DataContext";
import { searchByName } from "../services/searchByName";

export const SearchComponent = () => {
	const [inputValue, setInputValue] = useState("");
	const { setData } = useContext(DataContext);

	const handleSearch = async () => {
		const result = await searchByName(inputValue);
		setData(result);
	};

  	return (
		<div className="search">
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				style={{
				padding: "0.8rem 1rem",
				fontSize: "1rem",
				borderRadius: "8px",
				border: "2px solid #ddd",
				backgroundColor: "#f9f9f9",
				}}/>
			<button onClick={handleSearch}>Ieškoti</button>
		</div>
  	);
};
