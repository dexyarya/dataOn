import React, { useEffect, useState } from "react";
import "./MyTrainingCard.css";
import { Card, Badge } from "antd";
import MyTrainingCardCom from "./MyTrainingCardCom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Instance from "../../utils/axios";

function MyTrainingCard() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  const [items, setItems] = useState([]);

  useEffect(() => {
    Instance.get("my-training")
      .then((response) => {
        const data = response.data;
        setItems([...items, ...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            count={74}
            style={{ backgroundColor: "#D6EFED", color: "#40a9ff" }}
          />
        </div>

        <div className="carousel">
          <Carousel responsive={responsive}>
            {items.map((item, id) => (
              <MyTrainingCardCom key={id} item={item} />
            ))}
          </Carousel>
        </div>
      </Card>
    </>
  );
}

export default MyTrainingCard;
