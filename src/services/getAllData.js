import axios from "axios";
export const getAllData = async () => {
	try {
		const response = await axios.get(`https://restcountries.com/v3.1/all`);

		const AllData = response.data;

		return AllData;
	} catch (errors) {
		console.error(errors);
	}
};
