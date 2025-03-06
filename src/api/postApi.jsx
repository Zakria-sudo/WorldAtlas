import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1', // Replace with your API URL
});

 export const getCountryData=()=>{
    return api.get("/all?fields=name,population,region,capital,flag")
}
