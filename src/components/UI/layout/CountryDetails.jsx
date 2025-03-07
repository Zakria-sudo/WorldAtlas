import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { getCountry_IndvData } from "../../../api/postApi";

const CountryDetails = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);
  const params = useParams();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountry_IndvData(params.id);
        console.log("API Response:", res);
        setCountry(res.data[0]); 
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    });
  }, [params.id]);

  if (isPending || !country) return <Loader />;

  return (
    <section className="min-h-[87vh] flex items-center justify-center bg-[#0D1117] text-white">
      <div className="max-w-5xl w-full mx-auto p-8 rounded-lg shadow-2xl bg-[#161B22]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Flag Image */}
          <img 
            src={country.flags.svg} 
            alt={country.name.official} 
            className="w-full md:w-[400px] h-64 object-cover rounded-lg shadow-lg"
          />

          {/* Country Details */}
          <div className="space-y-3 text-lg">
            <h1 className="text-3xl font-bold border-b border-gray-700 pb-2">
              {country.name.official}
            </h1>
            <p><span className="font-semibold">Capital:</span> {country.capital?.join(", ") || "N/A"}</p>
            <p><span className="font-semibold">Region:</span> {country.region}</p>
            <p><span className="font-semibold">Subregion:</span> {country.subregion || "N/A"}</p>
            <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>

            {/* Languages */}
            <p>
              <span className="font-semibold">Languages:</span>{" "}
              {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
            </p>

            {/* Currencies */}
            <p>
              <span className="font-semibold">Currency:</span>{" "}
              {country.currencies
                ? Object.values(country.currencies)
                    .map((curr) => `${curr.name} (${curr.symbol})`)
                    .join(", ")
                : "N/A"}
            </p>

            {/* Borders */}
            <p>
              <span className="font-semibold">Borders:</span>{" "}
              {country.borders.length > 0 ? country.borders.join(", ") : "No bordering countries"}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
