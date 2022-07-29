import { createContext, useState, useEffect } from "react";
import instace from "../API";
export const AppContext = createContext();

export const ContextWraper = (props) => {
  const [training, setTrainingData] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  // const [trainingType, setTrainingType] = useState("");
  const handleChanges = (v, e) => {
    e.value;
    //   console.log(e.value);
    //   if (e.value === "Complete") {
    //     e.value = "true";
    //   } else {
    //     e.value = "false";
    //   }
    //   // getDataTraining(e.value);
    //   setTrainingType(e.value);
  };

  const [status, setStatus] = useState("");
  const handleChange = (v, e) => {
    if (e.value === "isOnline") {
      e.value = true;
    } else {
      e.value = false;
    }

    // getDataTraining(e.value);
    setStatus(e.value);
  };

  console.log("test", status);

  async function getDataTraining(search = "", status = "") {
    handleSetStateTraining("isLoading", true);

    try {
      const response = await instace.get(
        `trainings?search=${search}&isOnline=${status}`
      );
      handleSetStateTraining("data", response.data);
    } catch (err) {
      handleSetStateTraining("isError", true);
    }
    handleSetStateTraining("isLoading", false);
  }

  const [myTraining, setMyTrainingData] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  async function getDataMyTraining() {
    handleSetStateMyTraining("isLoading", true);
    try {
      const response = await instace.get(`my-training`);
      handleSetStateMyTraining("data", response.data);
    } catch (err) {
      handleSetStateMyTraining("isError", true);
    }
    handleSetStateMyTraining("isLoading", false);
  }

  const [trainingNext, setTrainingDataNext] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  async function getDataTrainingNext() {
    handleSetStateTrainingNext("isLoading", true);
    try {
      const response = await instace.get(`trainings?page=1&limit=10`);
      handleSetStateTrainingNext("data", response.data);
    } catch (err) {
      handleSetStateTrainingNext("isError", true);
    }
    handleSetStateTrainingNext("isLoading", false);
  }

  const [tableViews, setTableView] = useState(false);
  const [modalViews, setModalView] = useState(false);

  const handleOk = () => {
    setModalView(false);
  };

  const handleClick = () => {
    setTableView(!tableViews);
  };

  useEffect(() => {
    getDataMyTraining();
    getDataTrainingNext();
  }, []);

  const handleSetStateMyTraining = (field, value) => {
    setMyTrainingData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSetStateTraining = (field, value) => {
    setTrainingData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSetStateTrainingNext = (field, value) => {
    setTrainingDataNext((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        training,
        myTraining,
        trainingNext,
        tableViews,
        modalViews,
        setModalView,
        handleOk,
        handleClick,
        getDataTraining,
        handleChanges,
        handleChange,
        status,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
