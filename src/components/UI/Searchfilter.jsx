import React from 'react';

const Searchfilter = ({ search, setsearch, filter, setfilter, countries, setCountries }) => {
  const handleInputChange = (event) => {
    setsearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setfilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortedCountries = [...countries].sort((a, b) => 
      value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );
    setCountries(sortedCountries);
  };

  return (
    <section className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-wrap gap-4 justify-center items-center mb-7">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
        className="w-60 p-2 border border-gray-600 rounded-lg bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
      />

      {/* Sorting Buttons */}
      <div>
        <button onClick={() => sortCountries("asc")} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Asc</button>
      </div>
      <div>
        <button onClick={() => sortCountries("desc")} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Desc</button>
      </div>

      {/* Filter Dropdown */}
      <select
        value={filter}
        onChange={handleSelectChange}
        className="w-40 p-2 border border-gray-600 rounded-lg bg-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
      >
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default Searchfilter;
