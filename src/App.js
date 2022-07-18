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
      <TrainingEventList />
      <FilterSection handleClick={handleClick} tableView={tableViews} />
      <ToggleView tableView={tableViews} />
      <Router>
        <Routes>
          <Route
            path="/CreateTrainingEvent"
            element={<CreateTrainingEvent />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
