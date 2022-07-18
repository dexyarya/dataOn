import axios from "axios";

const Instance = axios.create({
  baseURL: "https://62d0c401d9bf9f17058d105d.mockapi.io/data-on/api/v1",
});

export default Instance;
