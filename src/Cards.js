import React, { isValidElement, useEffect, useState } from "react";
import "./index.css";
import {
  Card,
  CardHeader,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@mui/material";
import SearchFilter from "./SearchFilter";

const Cards = ({ data }) => {
  console.log("cards data", data.jdList);
  // const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const

  // const handleFilter = (e) => {
  //   const getSearch = e.target.value;
  //   if (getSearch === "") {
  //     setFilteredData(data);
  //   } else {
  //     const updData = data.jdList.filter((item) =>
  //       item.companyName.toLowerCase().includes(getSearch)
  //     );
  //     setFilteredData(updData);
  //     console.log("updData", getSearch);
  //   }
  // };

  return (
    <>
      <SearchFilter
        data={data}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />

      {data.jdList &&
        data.jdList
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.companyName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              val.location.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((items, index) => {
            return (
              <div>
                {console.log("itemsssss", items.minExp)}
                <Card className="card" key={items.jdUid}>
                  <Card className="card-post">⏳Posted 4 days ago</Card>
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
