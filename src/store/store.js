import { configureStore } from "@reduxjs/toolkit";
import zodiacReducer from "../slices/zodiacSlice.js";
export const store = configureStore({
  reducer: {
    zodiac: zodiacReducer,
  },
});
