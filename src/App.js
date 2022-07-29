import "./App.css";
// import { useState } from "react";
import ModalView from "./components/ModalView";
import FilterSection from "./components/FilterSection";
import ToggleView from "./components/ToggleView/ToggleView";
import MissingPath from "./components/MissingPath/MissingPath";
import TrainingEventList from "./components/TrainingEventList";
import EditTraining from "./components/EditTraining/EditTraining";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTrainingEvent from "./components/CreateTrainingEvent/CreateTrainingEvent";
import { ContextWraper } from "./Context/context";

function App() {
  return (
    <div className="App">
      <ContextWraper>
        <Router>
          <Routes>
            <Route path="*" exact={true} element={<MissingPath />} />
            <Route
              path="/"
              element={
                <>
                  <TrainingEventList />
                  <FilterSection />
                  <ToggleView /> <ModalView />
                </>
              }
            />
            <Route path="/create" element={<CreateTrainingEvent />} />
            <Route path="/missing" element={<MissingPath />} />
            <Route path="/edit/:id" element={<EditTraining />} />
          </Routes>
        </Router>
      </ContextWraper>
    </div>
  );
}

export default App;
