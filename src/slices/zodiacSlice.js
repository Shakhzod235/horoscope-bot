import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  description: null,
};

const requestURL = "https://poker247tech.ru/get_horoscope/";

export const fetchDescription = createAsyncThunk(
  "zodiac/fetchDescription",
  async (requestData) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(requestURL, {
      method: "POST",
      headers,
      body: JSON.stringify(requestData),
    });
    const data = await response.json();
    return data;
  }
);

const zodiacSlice = createSlice({
  name: "zodiac",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDescription.fulfilled, (state, action) => {
        state.description = action.payload;
      })
      .addCase(fetchDescription.rejected, (state, action) => {
        console.error("Fetch description failed:", action.error);
      });
  },
});

export default zodiacSlice.reducer;
