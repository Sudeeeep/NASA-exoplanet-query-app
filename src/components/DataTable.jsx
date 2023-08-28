import PropTypes from "prop-types";

export const DataTable = ({ filteredData, search, error }) => {
  if (!search) {
    return (
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
    );
  }

  if (error) {
    return (
      <div className="w-full mx-auto mt-48 font-bold">
        <p className="text-center">
          Please select atleast one query to show results
        </p>
      </div>
    );
  }

  if (filteredData !== []) {
    return (
      <div>
        <table className="mx-auto mt-10 border border-black">
          <thead className="border border-black">
            <tr>
              <th className="border border-black p-2">Planet Name</th>
              <th className="border border-black p-2">Host Name</th>
              <th className="border border-black p-2">Discovery Method</th>
              <th className="border border-black p-2">Discovery Year</th>
              <th className="border border-black p-2">Discovery Facility</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className="border border-black p-2">
                  <a
                    href={`https://exoplanetarchive.ipac.caltech.edu/overview/${item.pl_name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {item.pl_name}
                  </a>
                </td>

                <td className="border border-black p-2">{item.hostname}</td>
                <td className="border border-black p-2">
                  {" "}
                  {item.discoverymethod}
                </td>
                <td className="border border-black p-2">{item.disc_year}</td>
                <td className="border border-black p-2">
                  {item.disc_facility}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

DataTable.propTypes = {
  filteredData: PropTypes.array,
  search: PropTypes.bool,
  error: PropTypes.bool,
};
