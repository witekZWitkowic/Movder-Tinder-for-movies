import { rejectMovie, acceptMovie } from "./putRequest";
import axios from "axios";

jest.mock("axios");

describe("Movie Actions", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("Calling_axios.put_with_the_correct_URL_and_data_for_rejectMovie", async () => {
    const id = "movie-id";
    (axios.put as jest.Mock).mockResolvedValueOnce(id);

    await rejectMovie(id);

    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(`/recommendations/${id}/reject`, id);
  });

  it("Log_the_error_when_axios.put_for_rejectMovie_fails", async () => {
    const id = "movie-id";
    const error = new Error("Failed to reject movie");
    (axios.put as jest.Mock).mockRejectedValueOnce(error);

    console.log = jest.fn();

    await rejectMovie(id);

    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(`/recommendations/${id}/reject`, id);
    expect(console.log).toHaveBeenCalledWith(error);
  });

  it("Calling_axios.put_with_the_correct_URL_and_data_for_acceptMovie", async () => {
    const id = "movie-id";
    (axios.put as jest.Mock).mockResolvedValueOnce(id);

    await acceptMovie(id);

    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(`/recommendations/${id}/accept`, id);
  });

  it("Log_the_error_when_axios.put_for_acceptMovie_fails", async () => {
    const id = "movie-id";
    const error = new Error("Failed to accept movie");
    (axios.put as jest.Mock).mockRejectedValueOnce(error);

    console.log = jest.fn();

    await acceptMovie(id);

    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(`/recommendations/${id}/accept`, id);
    expect(console.log).toHaveBeenCalledWith(error);
  });
});