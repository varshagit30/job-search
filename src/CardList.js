import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./index.css";
import Cards from "./Cards";
import { Grid, Container } from "@mui/material";
import { fetchData, setFilter, clearFilter } from "./store/Actions/Actions";

function CardList({
  fetchData,
  data,
  setFilter,
  clearFilter,
  filter,
  state,
  loading,
  error,
}) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleClearFilter = () => {
    clearFilter();
  };

  // {data.jdList &&
  //   data.jdList
  //     .filter((val, index) => {
  //       if (searchTerm === "") {
  //         return val;
  //       } else if (
  //         val.companyName
  //           .toLowerCase()
  //           .includes(searchTerm.toLowerCase()) ||
  //         val.location.toLowerCase().includes(searchTerm.toLowerCase())
  //       ) {
  //         return val;
  //       }
  //     })

  const filteredData =
    data.jdList &&
    data.jdList.filter(
      (card) =>
        card.companyName.toLowerCase().includes(filter.toLowerCase()) ||
        card.location.toLowerCase().includes(filter.toLowerCase()) ||
        card.minExp <= filter
    );

  return (
    <Container>
      <Grid container spacing={2}>
        <Cards
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
  clearFilter,
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
  filter: state.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
