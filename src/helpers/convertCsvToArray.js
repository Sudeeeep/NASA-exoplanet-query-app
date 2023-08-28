export default function convertCsvToArray(csvData) {
  // result array to return the converted data
  const result = [];

  // Array containing all the lines in the csv file
  const lines = csvData.split("\n");

  // Array of just the headers from csv file
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    //object to store inside the result array
    let currentObj = {};

    //Array containing the comma separated values in each line
    let currentLineArr = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      //assigning each to it's corresponding header
      currentObj[headers[j]] = currentLineArr[j];
    }

    // push the current object into result array
    result.push(currentObj);
  }

  return result;
}
