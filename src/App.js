import "./App.css";
import MyTrainingCard from "./components/MyTrainingCard/MyTrainingCard";
import MyTrainingTableView from "./components/MyTrainingTableView/MyTrainingTableView";
import TrainingEventList from "./components/TrainingEventList";

function App() {
  return (
    <div className="App">
      <TrainingEventList />
      <MyTrainingCard />
      <MyTrainingTableView />
    </div>
  );
}

export default App;
