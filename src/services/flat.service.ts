import { AxiosResponse } from 'axios'

import { axiosClassic } from 'api/axios'

import { IFlat } from 'types/flat.type'

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

	async getCount(query_params: string): Promise<AxiosResponse<string>> {
		return await axiosClassic.get<string, AxiosResponse<string>>(
				`/count${query_params}`
		)
	}
}
