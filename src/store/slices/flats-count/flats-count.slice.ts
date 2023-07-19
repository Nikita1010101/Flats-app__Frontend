import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getFlatsCount } from '@/store/flats/flats.action'

const initialState: { flats_count: number } = {
	flats_count: 1
}

export const flatsCountSlice = createSlice({
	name: 'flats-count',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(
			getFlatsCount.fulfilled,
			(state, { payload }: PayloadAction<string>) => {
				state.flats_count = Number(payload)
			}
		)
	}
})
