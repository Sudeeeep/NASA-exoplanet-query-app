import { Query } from "./components/Query";
import useFetchCsv from "./hooks/useFetchCsv";

function App() {
  //custom hook to fetch and parse csv data
  const { data, hostName, discoveryMethod, discoveryYear, discoveryFacility } =
    useFetchCsv();

  if (data) {
    return (
      <>
        <Query
          data={data}
          hostName={hostName}
          discoveryMethod={discoveryMethod}
          discoveryYear={discoveryYear}
          discoveryFacility={discoveryFacility}
        />
      </>
    );
  }
}

export default App;
