import "./App.css";
import TrainingEventList from "./components/TrainingEventList";
import FilterSection from "./components/FilterSection";

function App() {
  return (
    <div className="App">
      <TrainingEventList />
      <FilterSection />
    </div>
  );
}

export default App;
