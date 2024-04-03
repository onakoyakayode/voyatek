import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  flightDetails: [],
  loading: false,
  error: null,
};

// Create async thunk action to fetch flight details
export const fetchFlightDetails = createAsyncThunk(
  "flightDetails/fetchFlightDetails",
  async (
    { itineraryId, token, currency, market, locale },
    { rejectWithValue }
  ) => {
    const options = {
      method: "GET",
      url: "https://skyscanner80.p.rapidapi.com/api/v1/flights/detail",
      params: {
        itineraryId,
        token,
        currency,
        market,
        locale,
      },
      headers: {
        "X-RapidAPI-Key": "cf4d95095fmshb25464ee90a8e84p19781cjsn39233cf23c0d",
        "X-RapidAPI-Host": "skyscanner80.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // If error message is available in response data, use it
        return rejectWithValue(error.response.data.message);
      } else {
        // Otherwise, provide a default error message
        return rejectWithValue(
          "An error occurred while fetching flight details."
        );
      }
    }
  }
);

// Define flight details slice
const flightDetailsSlice = createSlice({
  name: "flightDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlightDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlightDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.flightDetails = action.payload;
      })
      .addCase(fetchFlightDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

// Export actions and reducer
export const {} = flightDetailsSlice.actions;
export default flightDetailsSlice.reducer;
