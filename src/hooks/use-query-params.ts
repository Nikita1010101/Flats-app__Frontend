import { createQueryParams } from 'utils/create-query-params'
import { useTypedSelector } from './use-typed-selector'

export const useQueryParams = () => {
	const { current_page, sort_name, sort_type, ...filters_params } = useTypedSelector(
		state => state.query_params
	)

	const query_params = createQueryParams({
		current_page
	})

	const count_query_params = createQueryParams({})

	const filters_query_params = createQueryParams({
		current_page,
		sort_name,
		sort_type,
		filters_params
	})

	const filters_count_query_params = createQueryParams({ filters_params })

	return {
		query_params,
		count_query_params,
		filters_query_params,
		filters_count_query_params
	}
}
