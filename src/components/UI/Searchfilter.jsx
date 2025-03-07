import React from 'react';

const Searchfilter = ({ search, setsearch, filter, setfilter }) => {
  const handleInputChange = (event) => {
    setsearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setfilter(event.target.value);
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
