import * as flatActions from './flats/flats.action'
import { queryParamsSlice } from "./slices/query-params/query-params.slice";

export const rootActions = {
  ...flatActions,
  ...queryParamsSlice.actions,
}