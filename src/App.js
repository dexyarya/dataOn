import "./App.css";
import MyTrainingCard from "./components/MyTrainingCard/MyTrainingCard";
import TrainingEventList from "./components/TrainingEventList";
import FilterSection from "./components/FilterSection";
import AllTrainingEvent from "./components/AllTrainingEvent";
import MyTrainingTableView from "./components/MyTrainingTableView/MyTrainingTableView";
import AllTrainingTableView from "./components/AllTrainingTableView/AllTrainingTableView";

function App() {
  return (
    <div className="App">
      <TrainingEventList />
      <FilterSection />
      <MyTrainingCard />
      <AllTrainingEvent />
      <MyTrainingTableView />
      <AllTrainingTableView />
    </div>
  );
}

export default App;
