import { createAsyncThunk } from '@reduxjs/toolkit'
import { FlatService } from 'services/flat.service'
import { IFlat } from 'types/flat.interface'

export const getFlatsCount = createAsyncThunk<IFlat[] | string | 0, string>(
	'flats/count',
	async (query_params: string) => {
		try {
			const { data: flats_count } = await FlatService.getAllFlats(query_params)
			return flats_count
		} catch (error) {
			return 0
		}
	}
)
