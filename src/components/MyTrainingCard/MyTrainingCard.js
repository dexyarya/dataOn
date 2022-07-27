import React, { useState, useEffect } from "react";
import "./MyTrainingCard.css";
import { Card, Badge } from "antd";
import MyTrainingCardCom from "./MyTrainingCardCom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import instace from "../../API";
import { useNavigate } from "react-router-dom";

function MyTrainingCard() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  async function getData() {
    try {
      const response = await instace.get("my-training");
      setItems([...items, ...response.data]);
    } catch {
      navigate("/missing");
    }
  }
  useEffect(() => {
    getData();
  }, []);

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
            count={items.length}
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
