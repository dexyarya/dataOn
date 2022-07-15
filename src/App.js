import "./App.css";
import TrainingEventList from "./components/TrainingEventList";
import FilterSection from "./components/FilterSection";
import ToggleView from "./components/ToggleView/ToggleView";
import { useState } from "react";

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
    </div>
  );
}

export default App;
