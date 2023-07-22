import { combineReducers } from "@reduxjs/toolkit";

import { queryParamsSlice } from "./slices/query-params/query-params.slice";
import { flatsCountSlice } from "./slices/flats-count/flats-count.slice";

export const rootReducer = combineReducers({
  query_params: queryParamsSlice.reducer,
  flats_count: flatsCountSlice.reducer,
})

