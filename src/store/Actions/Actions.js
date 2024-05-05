import axios from "axios";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const SET_FILTER = "SET_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});

export const fetchData = () => {
  return (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    //   fetch placeholder data from jsonplaceholder
    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) =>
        //dispatch response to the store
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: data })
      )
      .catch((error) =>
        dispatch({ type: "FETCH_DATA_FAILURE", error: error.message })
      );
  };
};
