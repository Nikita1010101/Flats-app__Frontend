import { IFilters } from 'types/query.type'

export const createQueryParams = ({
	current_page,
	sort_name = '',
	sort_type = '',
	filters_params = {} as IFilters
}: {
	current_page?: number
	sort_name?: string
	sort_type?: string
	filters_params?: IFilters
}): string => {
	const params_array: string[] = []

	if (current_page) {
		params_array.push(`_page=${current_page}`)
	}

	if (sort_name && sort_type) {
		params_array.push(`_sort=${sort_name}+${sort_type}`)
	}

	if (Object.keys(filters_params).length !== 0) {
		const {
			floor_from,
			floor_to,
			rooms_from,
			rooms_to,
			area_total_from,
			area_total_to,
			area_live_from,
			area_live_to,
			area_kitchen_from,
			area_kitchen_to,
			price_from,
			price_to
		} = filters_params

		const filter_params = [
			`_floor=${floor_from}+${floor_to}`,
			`_rooms=${rooms_from}+${rooms_to}`,
			`_area_total=${area_total_from}+${area_total_to}`,
			`_area_live=${area_live_from}+${area_live_to}`,
			`_area_kitchen=${area_kitchen_from}+${area_kitchen_to}`,
			`_price=${price_from}+${price_to}`
		]

		params_array.push(...filter_params)
	}

	const total_params: string = '?' + params_array.join('&')

	return total_params
}
