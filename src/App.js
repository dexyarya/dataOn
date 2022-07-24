import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";
import TrainingEventList from "./components/TrainingEventList";
import FilterSection from "./components/FilterSection";
import ToggleView from "./components/ToggleView/ToggleView";
import { useState } from "react";
import CreateTrainingEvent from "./components/CreateTrainingEvent/CreateTrainingEvent";
import EditTraining from "./components/EditTraining/EditTraining";
import MissingPath from "./components/MissingPath/MissingPath";

function App() {
  const [tableViews, setTableView] = useState(false);
  // const Navigate = useNavigate();

  const handleClick = () => {
    setTableView(!tableViews);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" exact={true} element={<MissingPath />} />
          <Route
            path="/"
            element={
              <>
                <TrainingEventList />
                <FilterSection
                  handleClick={handleClick}
                  tableView={tableViews}
                />
                <ToggleView tableView={tableViews} />{" "}
              </>
            }
          />
          <Route path="/create" element={<CreateTrainingEvent />} />
          <Route path="/edit/:id*" element={<EditTraining />} />
          <Route path="/missing" element={<MissingPath />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
