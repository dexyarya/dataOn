import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainingEventList from "./components/TrainingEventList";
import FilterSection from "./components/FilterSection";
import ToggleView from "./components/ToggleView/ToggleView";
import { useState } from "react";
import CreateTrainingEvent from "./components/CreateTrainingEvent/CreateTrainingEvent";

function App() {
  const [tableViews, setTableView] = useState(false);

  const handleClick = () => {
    setTableView(!tableViews);
  };

  return (
    <div className="App">
      {/* <FilterSection handleClick={handleClick} tableView={tableViews} /> */}
      {/* <ToggleView tableView={tableViews} /> */}
      <Router>
        <TrainingEventList />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilterSection
                  handleClick={handleClick}
                  tableView={tableViews}
                />
                <ToggleView tableView={tableViews} />{" "}
              </>
            }
          />
          <Route path="/create" element={<CreateTrainingEvent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
