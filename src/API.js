import axios from "axios";

const instace = axios.create({
  baseURL: "https://62d0c401d9bf9f17058d105d.mockapi.io/data-on/api/v1/",
  // timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instace;
