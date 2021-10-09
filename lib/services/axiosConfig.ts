import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  // can put default authorization headers here
});

export default axios;
