import React from "react";
import "./MyTrainingCard.css";
import { Card, Badge } from "antd";
import MyTrainingCardCom from "./MyTrainingCardCom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const dataCard = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQUqxMXUiWU6PnFRSFgGRuRDYtYY7BqLLIg&usqp=CAU",
    location: "DataOn Simprung, Jakarta Selatan, ID",
    title: "Training Angular",
    date: "9 Jun 2022, 15:00 - 18.00",
    trainerUser: "Bambang Susanti",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UfyA4yy9oUylT_fvBycqvjXVeunHkXn71Q&usqp=CAU",
    location: "Online Event",
    title: "Seminar QA",
    date: "7 Jul 2022, 15:00 - 18.00",
    trainerUser: "Susanti Cytia",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScV7uuMEeglB28FjNYc1rxOFaKAjm_PYhIHA&usqp=CAU",
    location: "Nissi Bintaro Campus, Tangerang",
    title: "Training Golang",
    date: "9 Jan 2022, 15:00 - 18.00",
    trainerUser: "Spiderman",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScV7uuMEeglB28FjNYc1rxOFaKAjm_PYhIHA&usqp=CAU",
    location: "Nissi Bintaro Campus, Tangerang",
    title: "Training Golang",
    date: "9 Feb 2022, 15:00 - 18.00",
    trainerUser: "Badman",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScV7uuMEeglB28FjNYc1rxOFaKAjm_PYhIHA&usqp=CAU",
    location: "Nissi Bintaro Campus, Tangerang",
    title: "Training Golang",
    date: "9 Mar 2022, 15:00 - 18.00",
    trainerUser: "Iron Man",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScV7uuMEeglB28FjNYc1rxOFaKAjm_PYhIHA&usqp=CAU",
    location: "Nissi Bintaro Campus, Tangerang",
    title: "Training Golang",
    date: "9 Apr 2022, 15:00 - 18.00",
    trainerUser: "Juwitha Susanti",
  },
];

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
  return (
    <>
      <Card
        style={{
          margin: "10px",
          borderRadius: "20px",
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
            {dataCard.map((item, index) => (
              <MyTrainingCardCom key={index} item={item} />
            ))}
          </Carousel>
        </div>
      </Card>
    </>
  );
}

export default MyTrainingCard;
