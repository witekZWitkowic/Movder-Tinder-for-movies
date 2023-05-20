import axios from "axios";

//To notify the backend part of our app, let's use axios.put request, taking the id of a movie and putting it to one of the urls below
export const rejectMovie = async (id: string) => {
  try {
    await axios.put(`/recommendations/${id}/reject`, id);
  } catch (error) {
    console.log(error);
  }
};

export const acceptMovie = async (id: string) => {
  try {
    await axios.put(`/recommendations/${id}/accept`, id);
  } catch (error) {
    console.log(error);
  }
};