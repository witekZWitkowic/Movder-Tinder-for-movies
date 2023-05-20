import axios from "axios";
//Assuming that we get the data from the url below, we'd use the axios.get method to make it simple.
const url = "/recommendations";

export const getMovies = async () => {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.log("Error:", error);
  }
};