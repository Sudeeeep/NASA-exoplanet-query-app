import { Query } from "./components/Query";
import useFetchCsv from "./hooks/useFetchCsv";

function App() {
  const data = useFetchCsv(); //custom hook to fetch and parse csv data
  console.log(data);

  return (
    <>
      <Query data={data} />
    </>
  );
}

export default App;
