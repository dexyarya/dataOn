import "./App.css";
import MyTrainingCard from "./components/MyTrainingCard/MyTrainingCard";
import TrainingEventList from "./components/TrainingEventList";
import FilterSection from "./components/FilterSection";
import AllTrainingEvent from "./components/AllTrainingEvent";

function App() {
  return (
    <div className="App">
      <TrainingEventList />
      <FilterSection />
      <MyTrainingCard />
      <AllTrainingEvent />
    </div>
  );
}

export default App;
