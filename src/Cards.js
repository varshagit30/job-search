import React, { useState } from "react";
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

const Cards = ({
  data,
  setFilter,
  clearFilter,
  filter,
  filteredData,
  handleFilterChange,
  handleClearFilter,
  multiplefilter,
  setMultipleFilter,
  handleMultipleFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const newData = data.jdList;

  return (
    <>
      <SearchFilter
        data={data}
        filter={filter}
        newData={newData}
        setFilter={setFilter}
        clearFilter={clearFilter}
        handleFilterChange={handleFilterChange}
        handleClearFilter={handleClearFilter}
        multiplefilter={multiplefilter}
        setMultipleFilter={setMultipleFilter}
        handleMultipleFilterChange={handleMultipleFilterChange}
      />

      {filteredData &&
        filteredData.map((card, index) => {
          return (
            <>
              <Grid xs={4}>
                <Card className="card">
                  <Box className="card-post">⏳Posted 4 days ago</Box>
                  <CardHeader
                    avatar={
                      <CardMedia image={card.logoUrl} className="card-logo" />
                    }
                    title={
                      <>
                        <a className="company-name" href={card.jdLink}>
                          {" "}
                          {card.companyName}
                        </a>
                      </>
                    }
                    subheader={
                      <>
                        {card.jobRole}
                        <br />
                        {card.location}
                      </>
                    }
                  />
                  <CardContent>
                    {card.minJdSalary && card.maxJdSalary != null ? (
                      <Typography className="card-salary">
                        Estimated Salary: {card.minJdSalary} -{card.maxJdSalary}{" "}
                        {card.salaryCurrencyCode} ✅
                      </Typography>
                    ) : (
                      ""
                    )}
                    <br />
                    <Typography className="about-company">
                      About Company:
                    </Typography>
                    <Typography className="about-us">About us</Typography>
                    <Typography
                      className={isOpen ? "experience" : "job-details"}
                    >
                      {card.jobDetailsFromCompany}
                    </Typography>
                    <Button
                      id={index}
                      className="read-more"
                      onClick={(event) => {
                        if (event.target.id) {
                          setIsOpen(!isOpen);
                        }
                      }}
                    >
                      {isOpen ? "Read Less" : " View Job"}
                    </Button>
                    <br />
                    {card.minExp != null ? (
                      <>
                        <Typography className="card-salary">
                          Minimun experience
                        </Typography>
                        <Typography className="experience">
                          {card.minExp} years
                        </Typography>
                      </>
                    ) : (
                      " "
                    )}
                    <br />
                    <Link
                      component="button"
                      className="card-button"
                      underline="none"
                      href={card.jdLink}
                    >
                      <Button href={card.jdLink}>⚡ Easy Apply</Button>
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
