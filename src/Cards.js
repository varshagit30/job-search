import React, { useEffect } from "react";
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
  console.log("cards data", data.jdList);

  return (
    <>
      {data.jdList &&
        data.jdList.map((items, index) => {
          return (
            <div>
              {console.log("itemsssss", items.minExp)}
              <Card className="card" key={items.jdUid}>
                <CardMedia image={items.logoUrl} className="card-logo" />
                <CardContent>
                  <Typography className="card-info-container">
                    <a href={items.jdLink}> {items.companyName}</a>
                    <h2>{items.jobRole}</h2>
                  </Typography>
                  <p className="card-subtext">{items.location}</p>
                  <p className="card-salary">
                    Estimated Salary: {items.minJdSalary} -{items.maxJdSalary}{" "}
                    {items.salaryCurrencyCode} ✅
                    <br />
                  </p>
                  <Typography className="card-body">
                    <p className="about-company">About Company</p>
                    <p>
                      <strong>About us</strong>
                    </p>
                    <p>{items.jobDetailsFromCompany}</p>
                  </Typography>
                  <Typography className="card-info-container">
                    <h3>Minimun experience</h3>
                    <h2>{items.minExp}</h2>
                  </Typography>
                  <Button className="card-button">⚡ Easy Apply</Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
    </>
  );
};

export default Cards;
