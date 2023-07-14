import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { IFlat } from 'types/flat.interface'
import { IUseAllFlats } from 'types/hook.interafce'

import { FlatService } from 'services/flat.service'
import { createQueryParams } from 'utils/create-query-params'
import { useTypedSelector } from './use-typed-selector'
import { useActions } from './use-actions'

export const useAllFlats = (): IUseAllFlats => {	
	const { current_page, sort_key, sort_value } = useTypedSelector(state => state.query_params)
	const { getFlatsCount } = useActions()
	
	const query_params = createQueryParams({ current_page, sort_key, sort_value })
	const query_params_string = createQueryParams({ count: 'true' })
	
	const { data: flats, isLoading } = useQuery<
	AxiosResponse<IFlat[]>,
	unknown,
	IFlat[],
	readonly unknown[]
	>({
		queryKey: ['flats', current_page, sort_key, sort_value],
		queryFn: () => FlatService.getAllFlats(query_params),
		select: ({ data }) => data
	})
	
	getFlatsCount(query_params_string)

	return { flats, isLoading }
}
