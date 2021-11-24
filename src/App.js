import { useState } from "react";
import "./sass/style.scss";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Stats from "./components/Stats/Stats";
import Graph from "./components/Graph/Graph";

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  function handleClick() {
    setIsSidebarActive((prevState) => !prevState);
  }

  return (
    <div className="App">
      <main>
        <Header
          setIsSidebarActive={setIsSidebarActive}
          handleClick={handleClick}
        />
        <Stats />
        <Graph />
        <Map />
      </main>
      <Sidebar
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setIsSidebarActive}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
