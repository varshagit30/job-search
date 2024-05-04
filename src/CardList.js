import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./index.css";
import Cards from "./Cards";
import SearchFilter from "./SearchFilter";
import { Grid, Container } from "@mui/material";
import { fetchData } from "./store/Actions/Actions";

function CardList({ fetchData, data, state, loading, error }) {
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
    console.log("fetch", data);
  }, [fetchData]);

  return (
    <Container>
      <SearchFilter />
      <Grid container spacing={2} className="Grid">
        <Grid>
          <Cards data={data} />
        </Grid>
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
