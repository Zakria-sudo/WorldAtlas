import React from 'react';
import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const { flags, name, population, capital, region } = country;
  console.log(country);

  return (
 
<li className="border border-gray-500 rounded-lg shadow-lg bg-[#0D1117] text-white 
              transition-transform transform hover:scale-105 overflow-hidden max-w-sm">
  {/* Flag at the top */}
  <img src={flags.svg} className="w-full h-40 object-cover" alt="Country Flag" />

  <div className="p-4">
    <p className="text-lg font-semibold">Country: {country.name.common}</p>
    <p className="text-sm text-gray-300">Capital: {capital}</p>
    <p className="text-sm text-gray-300">Region: {region}</p>
    <p className="text-sm text-gray-300">Population: {population.toLocaleString()}</p>

    {/* Read More Button */}
    <NavLink to={`/country/${name.common}`}>
      <button className="mt-4 w-full border-2 border-gray-500 text-sm bg-gray-700 px-4 py-2 
                         rounded-lg hover:bg-gray-600 transition duration-300">
        Read More
      </button>
    </NavLink>
  </div>
</li>

  );
};

export default CountryCard;
