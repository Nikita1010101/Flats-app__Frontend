import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { IFlat } from 'types/flat.type'
import { IUseFlats } from 'types/hook.type'

import { useTypedSelector } from './use-typed-selector'
import { useActions } from './use-actions'
import { FlatService } from 'services/flat.service'
import { createQueryParams } from 'utils/create-query-params'

export const useFilters = (): IUseFlats => {
	const {
		filters_body,
		query_params: { current_page, sort_name, sort_type }
	} = useTypedSelector(state => state)
	const { getFlatsCount } = useActions()

	const query_params = createQueryParams(current_page, sort_name, sort_type)

	const queryKeys: readonly unknown[] = [
		filters_body,
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
		queryKey: ['filters-flats', ...queryKeys],
		queryFn: () => FlatService.getfilteredFlats(query_params, filters_body),
		select: ({ data }) => data
	})

	if (typeof window !== 'undefined') {
		getFlatsCount(filters_body)
	}

	return { flats, is_loading }
}
