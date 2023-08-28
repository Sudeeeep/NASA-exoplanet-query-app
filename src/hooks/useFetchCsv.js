import { useEffect, useState } from "react";
import convertCsvToArray from "../helpers/convertCsvToArray";

export default function useFetchCsv() {
  const [hostName, setHostName] = useState([]);
  const [discoveryMethod, setDiscoveryMethod] = useState([]);
  const [discoveryYear, setDiscoveryYear] = useState([]);
  const [discoveryFacility, setDiscoveryFacility] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchCsv();
  }, []);

  async function fetchCsv() {
    // fetch the .csv file
    const res = await fetch("data.csv");
    const data = await res.text();

    // filter the data to remove the contents at the top of the file that is not required
    const filteredCsv = data
      .split("\n")
      .filter((item) => !item.includes("#"))
      .join("\n");

    const resultArr = convertCsvToArray(filteredCsv);

    setData(resultArr);
    setHostName(() => resultArr.map((item) => item.hostname));
    setDiscoveryMethod(() => resultArr.map((item) => item.discoverymethod));
    setDiscoveryYear(() => resultArr.map((item) => item.disc_year));
    setDiscoveryFacility(() => resultArr.map((item) => item.disc_facility));
  }

  return { data, hostName, discoveryMethod, discoveryYear, discoveryFacility };
}
