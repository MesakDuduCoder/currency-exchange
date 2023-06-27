import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: [],
  currency:{},
  isLoading: true,
};

export const getCurrencies = createAsyncThunk(
  "currencies/getCurrencies",
  async (name, thunkAPI) => {
    try {
      const resp = await fetch(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json"
      );
       return resp.json();
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getCurrency = createAsyncThunk(
  "currency/getCurrency",
  async (name, thunkAPI) => {
    try {
      const resp = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${name}.json`
      );
          let result = await resp.json();
          let newCur = result[name];
            //  let newCurr2 = [];
            //  for (let currency in newCur) {
            //    newCurr2.push({ value: newCur[currency], name: currency });
            //  }
          return newCur;
    //  return resp.json();
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    // reserveRocket: (state, action) => {
    //   const id = action.payload;
    //   const newState = state.rockets.map((rocket) => {
    //     if (rocket.id !== id) return rocket;
    //     return { ...rocket, reserved: true };
    //   });
    //   state.rockets = newState;
    // },
    // cancelReserveRocket: (state, action) => {
    //   const id = action.payload;
    //   const newState = state.rockets.map((rocket) => {
    //     if (rocket.id !== id) return rocket;
    //     return { ...rocket, reserved: false };
    //   });
    //   state.rockets = newState;
    // },
  },
  extraReducers: {
    [getCurrencies.pending]: (state) => {
      state.isLoading = true;
    },
    [getCurrencies.fulfilled]: (state, action) => {
      state.isLoading = false;

      let curr = action.payload;
      let newCurr = [];
      for (let currency in curr) {
        newCurr.push({ name: curr[currency], symbol: currency });
      }
      state.currencies = newCurr;
    },
    [getCurrencies.rejected]: (state) => {
      state.isLoading = false;
    },
    [getCurrency.fulfilled]: (state, action) => {
      state.currency = {};
      state.currency = action.payload;
    },
  },
});
// export const {  } = currenciesSlice.actions;

export default currenciesSlice.reducer;
