import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IQueryParams } from './query-params.interface'

const initialState: IQueryParams = {
	current_page: 1,
	sort_name: '',
	sort_type: ''
}

export const queryParamsSlice = createSlice({
	name: 'query-params',
	initialState,
	reducers: {
		changePage: (state, { payload }: PayloadAction<number>) => {
			state.current_page = payload
		},
		changeSortName: (state, { payload }: PayloadAction<string>) => {
			state.sort_name = payload
		},
		changeSortType: (state, { payload }: PayloadAction<string>) => {
			state.sort_type = payload
		}
	}
})
