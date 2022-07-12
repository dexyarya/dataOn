import "./App.css";
import MyTrainingCard from "./components/MyTrainingCard/MyTrainingCard";
import TrainingEventList from "./components/TrainingEventList";
import FilterSection from "./components/FilterSection";
import AllTrainingEvent from "./components/AllTrainingEvent";
import MyTrainingTableView from "./components/MyTrainingTableView/MyTrainingTableView";

function App() {
  return (
    <div className="App">
      <TrainingEventList />
      <FilterSection />
      <MyTrainingCard />
      <AllTrainingEvent />
      <MyTrainingTableView />
    </div>
  );
}

export default App;
