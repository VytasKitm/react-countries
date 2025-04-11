import axios from 'axios'

export const getRegionData = async (region) => {
	try {
		const data = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
		if (data.data !== undefined) {
			return data.data
		}
	} catch (error) {
		console.log(error)
	}
	
}