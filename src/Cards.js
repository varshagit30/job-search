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
  Link,
  Box,
} from "@mui/material";
import SearchFilter from "./SearchFilter";

const Cards = ({ data }) => {
  console.log("cards data", data.jdList);
  // const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
  // const jsonData = JSON.stringify(data.jdList);
  // console.log("jsonData", jsonData);
  const newData = data.jdList;
  const minExpItems = [...new Set(newData && newData.map((val) => val.minExp))];

  return (
    <>
      <SearchFilter
        data={data}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        newData={newData}
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
              <>
                <Grid xs={4}>
                  <Card className="card" key={items.jdUid}>
                    <Box className="card-post">⏳Posted 4 days ago</Box>
                    <CardHeader
                      avatar={
                        <CardMedia
                          image={items.logoUrl}
                          className="card-logo"
                        />
                      }
                      title={
                        <>
                          <a href={items.jdLink}> {items.companyName}</a>
                        </>
                      }
                      subheader={
                        <>
                          {items.jobRole}
                          <br />
                          {items.location}
                        </>
                      }
                    />
                    <CardContent>
                      <Typography className="card-salary">
                        Estimated Salary: {items.minJdSalary} -
                        {items.maxJdSalary} {items.salaryCurrencyCode} ✅
                      </Typography>
                      <br />
                      <Typography className="about-company">
                        About Company:
                      </Typography>
                      <Typography className="about-us">About us</Typography>
                      <Typography className="job-details">
                        {items.jobDetailsFromCompany}
                      </Typography>
                      <br />
                      <Typography className="card-salary">
                        Minimun experience
                      </Typography>
                      <Typography className="job-details">
                        {items.minExp} years
                      </Typography>
                      <br />
                      <Link
                        component="button"
                        className="card-button"
                        variant="body2"
                        underline="none"
                        href={items.jdLink}
                      >
                        <Button href={items.jdLink}>⚡ Easy Apply</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            );
          })}
    </>
  );
};

export default Cards;
