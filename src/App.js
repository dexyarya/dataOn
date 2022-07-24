import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainingEventList from "./components/TrainingEventList";
import FilterSection from "./components/FilterSection";
import ToggleView from "./components/ToggleView/ToggleView";
import { useState } from "react";
import CreateTrainingEvent from "./components/CreateTrainingEvent/CreateTrainingEvent";
import ModalView from "./components/ModalView";

function App() {
  const [tableViews, setTableView] = useState(false);
  const [modalViews, setModalView] = useState(false);

  const handleOk = () => {
    setModalView(false);
  };

  const handleClick = () => {
    setTableView(!tableViews);
  };

  return (
    <div className="App">
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
                <ModalView modalViews={modalViews} handleOk={handleOk} />
              </>
            }
          />
          <Route
            path="/create"
            element={<CreateTrainingEvent setModalView={setModalView} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
