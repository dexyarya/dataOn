import React from "react";
import MyTrainingCard from "../MyTrainingCard/MyTrainingCard";
import MyTrainingTableView from "../MyTrainingTableView/MyTrainingTableView";
import AllTrainingTableView from "../AllTrainingTableView/AllTrainingTableView";
import AllTrainingEvent from "../AllTrainingEvent";

class ToggleView extends React.Component {
  render() {
    return (
      <div>
        {this.props.tableView ? <MyTrainingTableView /> : <MyTrainingCard />}
        {this.props.tableView ? <AllTrainingTableView /> : <AllTrainingEvent />}
      </div>
    );
  }
}
export default ToggleView;
