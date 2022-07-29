import React, { useContext } from "react";
import MyTrainingCard from "../MyTrainingCard/MyTrainingCard";
import MyTrainingTableView from "../MyTrainingTableView/MyTrainingTableView";
import AllTrainingTableView from "../AllTrainingTableView/AllTrainingTableView";
import AllTrainingEvent from "../AllTrainingEvent";
import { AppContext } from "../../Context/context";

function ToggleView() {
  const { search, tableViews } = useContext(AppContext);
  return (
    <div>
      {tableViews ? <MyTrainingTableView /> : <MyTrainingCard />}
      {tableViews ? (
        <AllTrainingTableView search={search} />
      ) : (
        <AllTrainingEvent search={search} />
      )}
    </div>
  );
}

export default ToggleView;
