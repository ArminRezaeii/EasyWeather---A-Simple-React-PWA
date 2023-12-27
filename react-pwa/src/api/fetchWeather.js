import axios from "axios";
export const fetchWeather = async (query) => {
  try {
    const { data } = await axios.get(
      `https://open-weather13.p.rapidapi.com/city/${query}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "c10dc39c47mshac97a12c05a665fp1a5816jsn5a70ee79f0a8",
          "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (erorr) {
    console.log(erorr);
  }
};
