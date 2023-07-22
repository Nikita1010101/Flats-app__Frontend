import { AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'

import { IFlat } from 'types/flat.type'
import { IUseFlats } from 'types/hook.type'
import { useTypedSelector } from './use-typed-selector'
import { useActions } from './use-actions'
import { FlatService } from 'services/flat.service'
import { useQueryParams } from './use-query-params'

export const useAllFlats = (): IUseFlats => {
	const { current_page, sort_name, sort_type } = useTypedSelector(
		state => state.query_params
	)
	const { getFlatsCount } = useActions()
	const { query_params, count_query_params } = useQueryParams()

	const queryKeys: readonly unknown[] = [current_page, sort_name, sort_type]

	const { data: flats, isLoading: is_loading } = useQuery<
		AxiosResponse<IFlat[]>,
		unknown,
		IFlat[],
		readonly unknown[]
	>({
		queryKey: ['flats', ...queryKeys],
		queryFn: () => FlatService.getAllFlats(query_params),
		select: ({ data }) => data
	})

	if (typeof window !== 'undefined') {
		getFlatsCount(count_query_params)
	}

	return { flats, is_loading }
}
