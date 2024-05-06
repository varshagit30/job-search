import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./index.css";
import Cards from "./Cards";
import { Grid, Container } from "@mui/material";
import {
  fetchData,
  setFilter,
  clearFilter,
  setMultipleFilter,
} from "./store/Actions/Actions";

function CardList({
  fetchData,
  data,
  setFilter,
  clearFilter,
  filter,
  multiplefilter,
  setMultipleFilter,
}) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleMultipleFilterChange = (e) => {
    setMultipleFilter(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleClearFilter = () => {
    clearFilter();
  };

  const multipleFilteredData =
    multiplefilter && multiplefilter.filter((card) => card.toLowerCase());

  const filteredData =
    data.jdList &&
    data.jdList.filter((card) => {
      let tempUpd = false;

      for (let i = 0; i < multipleFilteredData.length; i++) {
        if (multipleFilteredData[i] !== card.jobRole) {
          tempUpd = true;
          break;
        }
      }

      if (card.minExp === null || card.minJdSalary === null || tempUpd) {
        return false;
      } else if (
        card.companyName.toLowerCase().includes(filter.toLowerCase()) ||
        card.location.toLowerCase().includes(filter.toLowerCase()) ||
        card.minExp <= filter ||
        card.minJdSalary < filter ||
        tempUpd
      ) {
        return card;
      }
    });

  return (
    <Container>
      <Grid container spacing={2}>
        <Cards
          multiplefilter={multiplefilter}
          setMultipleFilter={setMultipleFilter}
          handleMultipleFilterChange={handleMultipleFilterChange}
          multipleFilteredData={multipleFilteredData}
          setFilter={setFilter}
          clearFilter={clearFilter}
          data={data}
          filter={filter}
          filteredData={filteredData}
          handleFilterChange={handleFilterChange}
          handleClearFilter={handleClearFilter}
        />
      </Grid>
    </Container>
  );
}

const mapDispatchToProps = {
  fetchData,
  setFilter,
  setMultipleFilter,
  clearFilter,
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
  filter: state.filter,
  multiplefilter: state.multiplefilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
