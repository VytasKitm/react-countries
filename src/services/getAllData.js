import axios from "axios";
export const getAllData = async () => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);

    const AllData = response.data;

    console.log(`GET: Here's the list of todos`, AllData);

    return AllData;
  } catch (errors) {
    console.error(errors);
  }
};
