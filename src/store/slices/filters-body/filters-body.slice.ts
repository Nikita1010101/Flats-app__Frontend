import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IFilters } from 'types/filter.type'

export const initialState: IFilters = {
	floor_from: 1,
	floor_to: 4,
	rooms_from: 1,
	rooms_to: 3,
	area_total_from: 33,
	area_total_to: 86,
	area_live_from: 11,
	area_live_to: 47,
	area_kitchen_from: 11,
	area_kitchen_to: 20,
	price_from: 2_880_000,
	price_to: 6_050_000
}

export const filterBodySlice = createSlice({
	name: 'filter-body',
	initialState,
	reducers: {
		changeFiltersBody: (state, { payload }: PayloadAction<IFilters>) => {
			state.floor_from = payload.floor_from
			state.floor_to = payload.floor_to
			state.rooms_from = payload.rooms_from
			state.rooms_to = payload.rooms_to
			state.area_total_from = payload.area_total_from
			state.area_total_to = payload.area_total_to
			state.area_live_from = payload.area_live_from
			state.area_live_to = payload.area_live_to
			state.area_kitchen_from = payload.area_kitchen_from
			state.area_kitchen_to = payload.area_kitchen_to
			state.price_from = payload.price_from
			state.price_to = payload.price_to
		}
	}
})
