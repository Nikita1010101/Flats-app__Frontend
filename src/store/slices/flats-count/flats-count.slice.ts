import { getFlatsCount } from '@/store/flats/flats.action'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFlat } from 'types/flat.interface'

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
			(state, { payload }: PayloadAction<IFlat[] | string | 0>) => {
				state.flats_count = Number(payload)
			}
		)
	}
})
