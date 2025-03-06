import React from 'react';
import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const { flags, name, population, capital, region } = country;
  console.log(country);

  return (
 
    <li className="border border-blue-500 rounded-lg shadow-lg bg-[#0D1117] text-white transition-transform transform hover:scale-105">   
      <h2 className="text-lg font-bold bg-blue-600 text-white text-center p-3 rounded-t-lg">{name.common}</h2>
      <div className='p-4 '>
      <p className='p-2'>Capital: {capital}</p>
      <p className='p-2'>Region: {region}</p>
      <p className='p-2'>Population: {population.toLocaleString()}</p>

    <NavLink to={`/country/:${name.common}`}>
      <button className="border-2 border-gray-500 text-xs  bg-gray-700 px-3 py-2 rounded-full my-2 cursor-pointer mx-auto lg:mx-0 hover:bg-gray-600 transition duration-300">
                  Read More
          </button>
          </NavLink>
      </div>
      
    </li>
  );
};

export default CountryCard;
