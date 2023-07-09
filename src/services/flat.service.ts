import { axiosClassic } from 'api/axios'
import { AxiosResponse } from 'axios'
import { IFlat } from 'types/flat.interface'

export const FlatService = {
	async getAllFlats(query_params: string): Promise<AxiosResponse<IFlat[]>> {
		return await axiosClassic.get<null, AxiosResponse<IFlat[]>>(
			`/${query_params}`
		)
	},

	async getFloorFlats(
		floor: number,
		query_params: string
	): Promise<AxiosResponse<IFlat[]>> {
		return await axiosClassic.get<number, AxiosResponse<IFlat[]>>(
			`/floor/${floor}${query_params}`
		)
	},

	async getFlat(flat: number): Promise<AxiosResponse<IFlat>> {
		return await axiosClassic.get<number, AxiosResponse<IFlat>>(`/flat/${flat}`)
	},

	async getFlatsCount(floor: number): Promise<AxiosResponse<number>> {
		return await axiosClassic.get<number, AxiosResponse<number>>(
			`/flats-count/${floor}`
		)
	}
}
