import * as flatActions from './flats/flats.action'
import { filterBodySlice } from './slices/filters-body/filters-body.slice';
import { queryParamsSlice } from "./slices/query-params/query-params.slice";

export const rootActions = {
  ...flatActions,
  ...queryParamsSlice.actions,
  ...filterBodySlice.actions
}