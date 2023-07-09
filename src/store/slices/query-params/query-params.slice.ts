import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IQueryParams } from './query-params.interface';

const initialState: IQueryParams = {
	page: 1,
	sort_key: '',
	sort_value: ''
}

export const queryParamsSlice = createSlice({
	name: 'query-params',
	initialState,
	reducers: {
		changePage: (state, { payload }: PayloadAction<number>) => {
			state.page = payload
		},
		changeSortParams: (
			state,
			{ payload }: PayloadAction<{ key: string; value: string }>
		) => {
			state.page = 1
			state.sort_key = payload.key
			state.sort_value = payload.value
		}
	}
})
