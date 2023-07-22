import { createAsyncThunk } from '@reduxjs/toolkit'

import { FlatService } from 'services/flat.service'

export const getFlatsCount = createAsyncThunk<string, string>(
	'flats/count',
	async (filter_params: string) => {
		try {
			const { data: flats_count } = await FlatService.getCount(filter_params)
			return flats_count
		} catch (error) {
			throw error
		}
	}
)
