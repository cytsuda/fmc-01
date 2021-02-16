import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from "../reducers/portfolioReducer";

export default configureStore({
  reducer: {
    portfolio: portfolioReducer,
  }
});