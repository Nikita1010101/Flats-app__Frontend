import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { IFlat } from 'types/flat.type'
import { IUseFlats } from 'types/hook.type'

import { useTypedSelector } from './use-typed-selector'
import { useActions } from './use-actions'
import { FlatService } from 'services/flat.service'
import { useQueryParams } from './use-query-params'

export const useFilters = (): IUseFlats => {
	const { current_page, sort_name, sort_type, ...filters_params } =
		useTypedSelector(state => state.query_params)
	const { getFlatsCount } = useActions()
	const { filters_query_params, filters_count_query_params } = useQueryParams()

	const queryKeys: readonly unknown[] = [
		filters_params,
		current_page,
		sort_name,
		sort_type
	]

	const { data: flats, isLoading: is_loading } = useQuery<
		AxiosResponse<IFlat[]>,
		unknown,
		IFlat[],
		readonly unknown[]
	>({
		queryKey: ['flats', ...queryKeys],
		queryFn: () => FlatService.getAllFlats(filters_query_params),
		select: ({ data }) => data
	})

	if (typeof window !== 'undefined') {
		getFlatsCount(filters_count_query_params)
	}

	return { flats, is_loading }
}
