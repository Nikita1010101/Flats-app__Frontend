import { createAsyncThunk } from '@reduxjs/toolkit'
import { FlatService } from 'services/flat.service'

export const getFlatsCount = createAsyncThunk<number, number>(
	'flats/count',
	async (floor: number) => {
		try {
			const { data: flats_count } = await FlatService.getFlatsCount(floor)
			return flats_count
		} catch (error) {
			return 0
		}
	}
)
