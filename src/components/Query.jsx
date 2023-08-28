import PropTypes from "prop-types";

export const Query = ({
  data,
  hostName,
  discoveryMethod,
  discoveryYear,
  discoveryFacility,
}) => {
  return (
    <>
      <div className="flex justify-center mt-5 gap-2">
        <select
          name="host-name"
          id="host-name-select"
          defaultValue="Host Name"
          className="w-[15%] py-4 pl-2 rounded-md"
        >
          <option value="Host Name">Host Name</option>
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
          defaultValue="Discovery Method"
          className="w-[15%] py-4 pl-2 rounded-md"
        >
          <option value="Discovery Method">Discovery Method</option>
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
          defaultValue="Discovery Year"
          className="w-[15%] py-4 pl-2 rounded-md"
        >
          <option value="Discovery Year">Discovery Year</option>
          {[...new Set(discoveryYear)].map((item, index) => {
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
          defaultValue="Discovery Facility"
          className="w-[15%] py-4 pl-2 rounded-md"
        >
          <option value="Discovery Facility">Discovery Facility</option>
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
          <button className="bg-[#395899] text-white px-4 py-1 rounded-md ml-2 mr-4">
            Search
          </button>
          <button className="bg-[#395899] text-white px-4 py-1 rounded-md">
            Clear
          </button>
        </div>
      </div>

      <div className="w-full mx-auto mt-48 font-bold">
        <p className="text-center">
          Exoplanets are planets outside the Solar System.
        </p>
        <p className="text-center">
          Here you can query{" "}
          <span className="text-[#325e8d]">NASA&apos;s Exoplanet Archive</span>{" "}
          and find the one you love the most.
        </p>
      </div>
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
