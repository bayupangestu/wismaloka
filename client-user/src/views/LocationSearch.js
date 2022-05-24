import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_HOUSE } from "../queries/houseQuery";
import MapSearch from "../components/MapSearch";

export default function LocationSearch() {
  const { loading, error, data } = useQuery(GET_HOUSE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <div className="flex flex-row justify-around">
        <Link
          to={"/"}
          className="w-full py-3 border-b-2 border-r-2  hover:bg-emerald-50 hover:cursor-pointer"
        >
          <div>
            <p className="text-emerald-700 text-lg font-bold">
              Based on budget
            </p>
          </div>
        </Link>
        <div className="w-full py-3 border-b-4 border-b-emerald-700 hover:bg-emerald-50 hover:cursor-pointer">
          <p className="text-emerald-700 text-lg font-bold">
            Based on location
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap my-6 mx-4 rounded-lg shadow">
          <MapSearch data={data}></MapSearch>
        </div>
        <form>
          <div className="mx-4 mb-6">
            <button className="w-full bg-emerald-800 text-white p-3 rounded-lg">
              Find homes near you
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
