import React, { useTransition,useEffect,useState } from 'react'
import { getCountryData } from '../api/postApi'
import Loader from '../components/UI/Loader'
import CountryCard from '../components/CountryCard'
const Country = () => {
  const [isPending, startTransition] = useTransition()
  const [countries, setcountries] = useState([])

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
  
  
  {isPending && <Loader/>}
  return (
   <section>
    <ul className='grid grid-cols-4 max-w-[90%] mx-auto gap-4'>{
      countries.map((curCountry,index)=>{
        return <CountryCard country={curCountry} key={index}/>
      })
      }</ul>
   </section>
  )
}

export default Country
