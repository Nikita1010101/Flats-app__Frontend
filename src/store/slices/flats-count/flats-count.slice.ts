import { getFlatsCount } from '@/store/flats/flats.action'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
			(state, { payload }: PayloadAction<number>) => {
				state.flats_count = payload
			}
		)
	}
})
