import "./App.css";
import TrainingEventList from "./components/TrainingEventList";
import FilterSection from "./components/FilterSection";
import AllTrainingEvent from "./components/AllTrainingEvent";

function App() {
  return (
    <div className="App">
      <TrainingEventList />
      <FilterSection />
      <AllTrainingEvent />
    </div>
  );
}

export default App;
