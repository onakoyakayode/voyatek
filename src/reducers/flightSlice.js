import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  destinations: [],
  flights: [],
  multiStopFlights: [],
  flightDetails: {},
  loading: false,
  error: null,
};

export const getFlightDetails = createAsyncThunk(
  "flights/getFlightDetails",
  async (_, thunkAPI) => {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/flights/getFlightDetails",
      params: {
        token: "<REQUIRED>",
        currency_code: "AED",
      },
      headers: {
        "X-RapidAPI-Key": "cf4d95095fmshb25464ee90a8e84p19781cjsn39233cf23c0d",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const searchMultiStopFlights = createAsyncThunk(
  "flights/searchMultiStopFlights",
  async (_, thunkAPI) => {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlightsMultiStops",
      params: {
        legs: '[{"fromId":"BOM.AIRPORT","toId":"AMD.AIRPORT","date":"2024-05-25"},{"fromId":"AMD.AIRPORT","toId":"BOM.AIRPORT","date":"2024-05-28"}]',
        pageNo: "1",
        adults: "1",
        children: "0,17",
        currency_code: "AED",
      },
      headers: {
        "X-RapidAPI-Key": "cf4d95095fmshb25464ee90a8e84p19781cjsn39233cf23c0d",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const searchDestinations = createAsyncThunk(
  "flights/searchDestinations",
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination`,
        {
          params: { query },
          headers: {
            "X-RapidAPI-Key":
              "cf4d95095fmshb25464ee90a8e84p19781cjsn39233cf23c0d",
            "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
          },
        }
      );
      return response.data;
    } catch (error) {
      //   throw Error(error.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const searchFlights = createAsyncThunk(
  "flights/searchFlights",
  async (params, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights",
        {
          params: {
            sourceAirportCode: "BOM",
            destinationAirportCode: "DEL",
            date: "<REQUIRED>",
            itineraryType: "<REQUIRED>",
            sortOrder: "<REQUIRED>",
            numAdults: "1",
            numSeniors: "0",
            classOfService: "<REQUIRED>",
            pageNumber: "1",
            currencyCode: "USD",
            ...params, // Merge additional params if provided
          },
          headers: {
            "X-RapidAPI-Key":
              "cf4d95095fmshb25464ee90a8e84p19781cjsn39233cf23c0d",
            "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchFlights = createAsyncThunk(
  "flights/fetchFlights",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://sky-scrapper.p.rapidapi.com/api/v1/checkServer",
        {
          headers: {
            "X-RapidAPI-Key":
              "cf4d95095fmshb25464ee90a8e84p19781cjsn39233cf23c0d",
            "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
          },
        }
      );
      return response.data;
    } catch (error) {
      // Return rejected value with error data
      return rejectWithValue(error.response.data);
    }
  }
);

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.flights = action.payload;
      })
      .addCase(searchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchMultiStopFlights.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMultiStopFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.multiStopFlights = action.payload;
      })
      .addCase(searchMultiStopFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getFlightDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFlightDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.flightDetails = action.payload;
      })
      .addCase(getFlightDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message; // Assuming the error message is in the "message" field
      });
  },
});

export const {} = flightsSlice.actions;

export default flightsSlice.reducer;
