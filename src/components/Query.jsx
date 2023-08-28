import PropTypes from "prop-types";
import { useState } from "react";
import { DataTable } from "./DataTable";

export const Query = ({
  data,
  hostName,
  discoveryMethod,
  discoveryYear,
  discoveryFacility,
}) => {
  const [hostNameQuery, setHostNameQuery] = useState("");
  const [discoveryMethodQuery, setDiscoveryMethodQuery] = useState("");
  const [discoveryYearQuery, setDiscoveryYearQuery] = useState("");
  const [discoveryFacilityQuery, setDiscoveryFacilityQuery] = useState("");
  const [filteredData, setFilteredData] = useState();
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(false);

  function handleSubmit() {
    if (
      hostNameQuery == "" &&
      discoveryMethodQuery == "" &&
      discoveryYearQuery == "" &&
      discoveryFacilityQuery == ""
    ) {
      setError("Please select atleast one query to show results");
      setSearch(true);
    } else {
      setFilteredData(
        data.filter(
          (item) =>
            (hostNameQuery === "" ? true : hostNameQuery === item.hostname) &&
            (discoveryMethodQuery === ""
              ? true
              : discoveryMethodQuery === item.discoverymethod) &&
            (discoveryYearQuery === ""
              ? true
              : discoveryYearQuery === item.disc_year) &&
            (discoveryFacilityQuery === ""
              ? true
              : discoveryFacilityQuery === item.disc_facility)
        )
      );
      setError("");
      setSearch(true);

      console.log(filteredData);
      console.log("host" + hostNameQuery);
      console.log(discoveryMethodQuery);
      console.log("year" + discoveryYearQuery);
      console.log("facility" + discoveryFacilityQuery);
    }
  }

  function handleClear() {
    setHostNameQuery("");
    setDiscoveryMethodQuery("");
    setDiscoveryYearQuery("");
    setDiscoveryFacilityQuery("");
    setSearch(false);
    setError("");
  }

  return (
    <>
      <div className="flex justify-center mt-5 gap-2">
        <select
          name="host-name"
          id="host-name-select"
          value={hostNameQuery}
          onChange={(e) => {
            setHostNameQuery(e.target.value);
          }}
          className="w-[15%] py-4 pl-2 rounded-md"
        >
          <option value="">Host Name</option>
          {[...new Set(hostName)].map((item, index) => {
            if (item) {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            }
          })}
        </select>

        <select
          name="discovery-method"
          id="discovery-method-select"
          value={discoveryMethodQuery}
          onChange={(e) => {
            setDiscoveryMethodQuery(e.target.value);
          }}
          className="w-[15%] py-4 pl-2 rounded-md"
        >
          <option value="">Discovery Method</option>
          {[...new Set(discoveryMethod)].map((item, index) => {
            if (item) {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            }
          })}
        </select>

        <select
          name="discovery-year"
          id="discovery-year-select"
          value={discoveryYearQuery}
          onChange={(e) => setDiscoveryYearQuery(e.target.value)}
          className="w-[15%] py-4 pl-2 rounded-md"
        >
          <option value="">Discovery Year</option>
          {[...new Set(discoveryYear)].sort().map((item, index) => {
            if (item) {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            }
          })}
        </select>

        <select
          name="discovery-facility"
          id="discovery-facility-select"
          value={discoveryFacilityQuery}
          onChange={(e) => setDiscoveryFacilityQuery(e.target.value)}
          className="w-[15%] py-4 pl-2 rounded-md"
        >
          <option value="">Discovery Facility</option>
          {[...new Set(discoveryFacility)].map((item, index) => {
            if (item) {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            }
          })}
        </select>

        <div className="my-auto">
          <button
            className="bg-[#395899] text-white px-4 py-1 rounded-md ml-2 mr-4"
            onClick={handleSubmit}
          >
            Search
          </button>
          <button
            className="bg-[#395899] text-white px-4 py-1 rounded-md"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>

      <DataTable
        filteredData={filteredData}
        search={search}
        error={error}
        setError={setError}
      />
    </>
  );
};

Query.propTypes = {
  data: PropTypes.array,
  hostName: PropTypes.array,
  discoveryMethod: PropTypes.array,
  discoveryYear: PropTypes.array,
  discoveryFacility: PropTypes.array,
};
