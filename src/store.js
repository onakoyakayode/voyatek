import { configureStore } from "@reduxjs/toolkit";
import flightsReducer from "../src/reducers/flightSlice";
import flightDetailsReducer from "./reducers/flightDetailsSlice";

const store = configureStore({
  reducer: {
    flights: flightsReducer,
    flightDetails: flightDetailsReducer,
  },
});

export default store;
