import React, { useTransition, useEffect, useState } from 'react';
import { getCountryData } from '../api/postApi';
import Loader from '../components/UI/Loader';
import CountryCard from '../components/UI/layout/CountryCard';
import Searchfilter from '../components/UI/Searchfilter';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        console.log("API Response:", res);
        setCountries(res.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    });
  }, []);

  console.log(search, filter);

  const searchCountry = (country) => {
    return search
      ? country.name.common.toLowerCase().includes(search.toLowerCase())
      : true;
  };

  const filterRegion = (country) => {
    return filter.toLowerCase() === "all" ? true : country.region === filter;
  };

  const filterCountries = countries.filter((country) => 
    searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="px-4 md:px-8 lg:px-12">
      <Searchfilter 
        search={search} 
        setsearch={setSearch} 
        filter={filter} 
        setfilter={setFilter} 
        countries={countries} 
        setCountries={setCountries} 
      />
      {isPending ? (
        <Loader />
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[90%] mx-auto">
          {filterCountries.map((curCountry, index) => (
            <CountryCard country={curCountry} key={index} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Country;
