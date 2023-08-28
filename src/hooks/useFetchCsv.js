import { useEffect, useState } from "react";
import convertCsvToArray from "../helpers/convertCsvToArray";

export default function useFetchCsv() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCsv();
  }, []);

  async function fetchCsv() {
    const res = await fetch("data.csv"); // fetch the .csv file
    const data = await res.text();

    const filteredCsv = data // filter the data to remove the contents at the top of the file that is not required
      .split("\n")
      .filter((item) => !item.includes("#"))
      .join("\n");

    const resultArr = convertCsvToArray(filteredCsv);

    setData(resultArr);
  }

  return data;
}
