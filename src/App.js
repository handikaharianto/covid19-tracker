import { useState } from "react";
import "./sass/style.scss";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

const url = "https://disease.sh/v3/covid-19/countries";

function App() {
  const { data } = useFetch(url);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  function handleClick() {
    setIsSidebarActive((prevState) => !prevState);
  }

  return (
    <div className="App">
      <Header
        setIsSidebarActive={setIsSidebarActive}
        handleClick={handleClick}
      />
      {/* <Dashboard /> */}
      {/* <Map data={data} /> */}
      <Sidebar
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setIsSidebarActive}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
