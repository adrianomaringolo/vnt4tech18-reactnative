import axios from 'axios';

axios.defaults.baseURL = 'https://vjobs.herokuapp.com';

const getJobs = () => {
  return axios.get('/jobs')
    .then(response => response.data);
}


module.exports = {
  getJobs
}