import { useState } from "react";
import "./sass/style.scss";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Stats from "./components/Stats/Stats";
import Graph from "./components/Graph/Graph";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  function handleClick() {
    setIsSidebarActive((prevState) => !prevState);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header handleClick={handleClick} title="dashboard" />
                  <Stats />
                  <Graph />
                  <Map />
                </>
              }
            />
            <Route
              path="/tables"
              element={
                <>
                  <Header handleClick={handleClick} title="tables" />
                </>
              }
            />
          </Routes>
        </main>
        <Sidebar isSidebarActive={isSidebarActive} handleClick={handleClick} />
      </div>
    </BrowserRouter>
  );
}

export default App;
