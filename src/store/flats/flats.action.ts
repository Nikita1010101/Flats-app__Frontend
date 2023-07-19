import { createAsyncThunk } from '@reduxjs/toolkit'

import { IFilters } from 'types/filter.type'
import { FlatService } from 'services/flat.service'

export const getFlatsCount = createAsyncThunk<string, IFilters>(
	'flats/count',
	async (body: IFilters) => {
		try {
			const { data: flats_count } = await FlatService.getCount(body)
			return flats_count
		} catch (error) {
			throw error
		}
	}
)
