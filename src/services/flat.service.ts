import { AxiosResponse } from 'axios'

import { axiosClassic } from 'api/axios'

import { IFlat } from 'types/flat.type'
import { IFilters } from 'types/filter.type'

export const FlatService = {
	async getAllFlats(
		query_params: string = ''
	): Promise<AxiosResponse<IFlat[]>> {
		return await axiosClassic.get<null, AxiosResponse<IFlat[]>>(
			`/${query_params}`
		)
	},

	async getOneFlat(flat_id: string): Promise<AxiosResponse<IFlat>> {
		return await axiosClassic.get<string, AxiosResponse<IFlat>>(
			`/flat/${flat_id}`
		)
	},

	async getCount(body: IFilters): Promise<AxiosResponse<string>> {
		return await axiosClassic.post<IFilters, AxiosResponse<string>>(
			'/count',
			body
		)
	},

	async getfilteredFlats(
		query_params: string,
		body: IFilters
	): Promise<AxiosResponse<IFlat[]>> {
		return await axiosClassic.post<IFilters, AxiosResponse<IFlat[]>>(
			`/filters${query_params}`,
			body
		)
	}
}
