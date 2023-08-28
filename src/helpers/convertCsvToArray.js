export default function convertCsvToArray(csvData) {
  const result = []; // result array to return the converted data
  const lines = csvData.split("\n"); // Array containing all the lines in the csv file
  const headers = lines[0].split(","); // Array of just the headers from csv file

  for (let i = 1; i < lines.length; i++) {
    let currentObj = {}; //object to store inside the result array
    let currentLineArr = lines[i].split(","); //Array containing the comma separated values in each line

    for (let j = 0; j < headers.length; j++) {
      currentObj[headers[j]] = currentLineArr[j]; //assigning each to it's corresponding header
    }

    result.push(currentObj); // push the current object into result array
  }

  return result;
}
