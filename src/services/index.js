import axios from "axios";

export const getCountries = async () => {
  let result = await axios
    .get("https://restcountries.eu/rest/v2/all")
    .then((response) => response.data);

  return result;
};
