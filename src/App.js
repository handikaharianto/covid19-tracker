import "./sass/style.scss";

import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";

const url = "https://disease.sh/v3/covid-19/countries";

function App() {
  const { data } = useFetch(url);

  return (
    <div className="App">
      <Header />
      <Map data={data} />
    </div>
  );
}

export default App;
