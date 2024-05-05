import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./index.css";
import Cards from "./Cards";
import { Grid, Container } from "@mui/material";
import { fetchData } from "./store/Actions/Actions";

function CardList({ fetchData, data, state, loading, error }) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log("fetch data", data);
  return (
    <Container>
      <Grid container spacing={2}>
        <Cards data={data} />
      </Grid>
    </Container>
  );
}

const mapDispatchToProps = {
  fetchData,
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});
console.log(
  "mapStateToProps",
  mapStateToProps((state) => state)
);

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
