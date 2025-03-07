import React, { useTransition,useEffect,useState } from 'react'
import { getCountryData } from '../api/postApi'
import Loader from '../components/UI/Loader'
import CountryCard from '../components/UI/layout/CountryCard'
import Searchfilter from '../components/UI/Searchfilter'

const Country = () => {
  const [isPending, startTransition] = useTransition()
  const [countries, setcountries] = useState([])
  const [search, setsearch] = useState("")
  const [filter, setfilter] = useState("All")

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        console.log("API Response:", res); // Debugging
  
        // Extract the array from res.data
        setcountries(res.data); 
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    });
  }, []);
  
  console.log(search,filter)
  {isPending && <Loader/>}

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true; 
  
  };
  
  const filterCountries = countries.filter(searchCountry);

  return (
   <section>
    <Searchfilter search={search} setsearch={setsearch} filter={filter} setfilter={setfilter} />
    <ul className='grid grid-cols-4 max-w-[90%] mx-auto gap-4'>{
      filterCountries.map((curCountry,index)=>{
        return <CountryCard country={curCountry} key={index}/>
      })
      }</ul>
   </section>
  )
}

export default Country
