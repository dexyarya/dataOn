import "./App.css";
import MyTrainingCard from "./components/MyTrainingCard/MyTrainingCard";
import TrainingEventList from "./components/TrainingEventList";

function App() {
  return (
    <div className="App">
      <TrainingEventList />
      <MyTrainingCard />
    </div>
  );
}

export default App;
