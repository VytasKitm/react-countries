import axios from 'axios'

export const searchByName = async (name) => {
	try {
		const data = await axios.get(`https://restcountries.com/v3.1/name/${name}`)

		if (data.data !== undefined) {
			return data.data
		}

	} catch (error) {
		console.log(error)
		return null
	}	
}