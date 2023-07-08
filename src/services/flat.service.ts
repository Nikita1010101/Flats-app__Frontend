import { axiosClassic } from 'api/axios'
import { AxiosResponse } from 'axios'
import { IFlat } from 'types/flat.interface'

export const FlatService = {
	async getAllFlats(): Promise<AxiosResponse<IFlat[]>> {
		return await axiosClassic.get<null, AxiosResponse<IFlat[]>>('/')
	},

	async getFloorFlats(floor: number): Promise<AxiosResponse<IFlat[]>> {
		return await axiosClassic.get<number, AxiosResponse<IFlat[]>>(
			`/floor/${floor}`
		)
	},

	async getFlat(flat: number): Promise<AxiosResponse<IFlat>> {
		return await axiosClassic.get<number, AxiosResponse<IFlat>>(`/flat/${flat}`)
	}
}
