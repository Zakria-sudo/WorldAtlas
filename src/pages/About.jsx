import React from 'react';
import countries from '../api/countryData.json';

const About = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="bg-black text-white text-center py-8">
        <h1 className="text-3xl font-bold">Here are the Interesting Facts</h1>
        <h1 className="text-3xl font-bold mt-2">we're proud of</h1>
      </div>

      {/* Cards Container */}
      <div className="max-w-[90%] mx-auto text-white p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {countries.map((item) => (
          <div 
            key={item.id} 
            className="border border-blue-500 rounded-lg shadow-lg bg-[#0D1117] text-white transition-transform transform hover:scale-105"
          >
            {/* Card Header */}
            <div className="bg-blue-600 text-white text-center p-3 rounded-t-lg">
              <h2 className="text-lg font-semibold">{item.country}</h2>
            </div>

            {/* Card Content */}
            <div className="p-4 space-y-2">
              <p>
                <span className="font-semibold text-blue-400">Country:</span> {item.country}
              </p>
              <p>
                <span className="font-semibold text-blue-400">Capital:</span> {item.capital}
              </p>
              <p>
                <span className="font-semibold text-blue-400">Population:</span> {item.population}
              </p>
              <p>
                <span className="font-semibold text-blue-400">Interesting Fact:</span> {item.interesting_fact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
