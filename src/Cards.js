import React from "react";
import "./index.css";
import {
  Card,
  CardHeader,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const Cards = ({ data }) => {
  console.log("cards data", data);
  return (
    <div>
      {/* {data.map((items, index) => ( */}
        <Card className="card">
          <CardMedia image="#" className="card-logo" />
          <CardContent>
            <Typography className="card-info-container">
              <h3>Homework App</h3>
              <h2>Jr Fullstack</h2>
            </Typography>
            <p className="card-subtext">India</p>
            <p className="card-salary">
              Estimated Salary: ₹15 - 20 LPA ✅
              <br />
            </p>
            <Typography className="card-body">
              <p className="about-company">About Company</p>
              <p>
                <strong>About us</strong>
              </p>
              <p>
                This is a sample job and you must have displayed it to
                understand that its not just some random lorem ipsum text but
                something which was manually written. Oh well, if random text is
                what you were looking for then here it is: Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages and now in this assignment
              </p>
            </Typography>
            <Typography className="card-info-container">
              <h3>Minimun experience</h3>
              <h2>1 year</h2>
            </Typography>
            <Button className="card-button">⚡ Easy Apply</Button>
          </CardContent>
        </Card>
      {/* ))} */}
    </div>
  );
};

export default Cards;
