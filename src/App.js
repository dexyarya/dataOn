import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MyTrainingCard from "./components/MyTrainingCard/MyTrainingCard";
import TrainingEventList from "./components/TrainingEventList";
import FilterSection from "./components/FilterSection";
import AllTrainingEvent from "./components/AllTrainingEvent";
import MyTrainingTableView from "./components/MyTrainingTableView/MyTrainingTableView";
import CreateTrainingEvent from "./components/CreateTrainingEvent/CreateTrainingEvent";

function App() {
  return (
    <div className="App">
      <TrainingEventList />
      <FilterSection />
      <MyTrainingCard />
      <AllTrainingEvent />
      <MyTrainingTableView />
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
