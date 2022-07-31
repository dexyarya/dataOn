import React, { useContext } from "react";
import "./MyTrainingCard.css";
import { Card, Badge, message } from "antd";
import MyTrainingCardCom from "./MyTrainingCardCom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AppContext } from "../../Context/context";
import LoadingCmponent from "./LoadingComponent";

function MyTrainingCard() {
  const { myTraining } = useContext(AppContext);
  if (myTraining.isLoading) return <LoadingCmponent />;
  if (myTraining.error) return message.error("Get Data Filed");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Card
        style={{
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        <div className="titleTraining">
          My Training Event{" "}
          <Badge
            className="site-badge-count-109"
            count={myTraining.data.length}
            style={{ backgroundColor: "#D6EFED", color: "#40a9ff" }}
          />
        </div>

        <div className="carousel">
          <Carousel responsive={responsive}>
            {myTraining.data.map((item, id) => (
              <MyTrainingCardCom key={id} item={item} />
            ))}
          </Carousel>
        </div>
      </Card>
    </>
  );
}

export default MyTrainingCard;
