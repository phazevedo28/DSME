import axios from 'axios';

import { GOV_API_KEY, GOV_API_ADDRESS } from '../environment/config';

const instance = axios.create({
    baseURL: GOV_API_ADDRESS,
    timeout: 2000,
    headers: {
      "Accept": "*/*",
      "chave-api-dados": GOV_API_KEY,
    }
  });

export const post = (url, parameters = {}) => instance.post(
  `${GOV_API_ADDRESS}/${url}`,
  parameters
)
  .then(response => {
    if (response.data.status) {
      console.log(response);
   } 
  }).catch(error => {
    console.log(error)
  });