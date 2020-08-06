import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-deploy.herokuapp.com/'
})

export default api;