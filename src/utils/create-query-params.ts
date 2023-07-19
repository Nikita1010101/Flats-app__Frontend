export const createQueryParams = (
	current_page: number,
	sort_name: string,
	sort_type: string
): string => {
	const params_array: string[] = []

	if (current_page) {
		params_array.push(`_page=${current_page}`)
	}

	if (sort_name && sort_type) {
		params_array.push(`_sort=${sort_name}+${sort_type}`)
	}

	const total_params: string = '?' + params_array.join('&')

	return total_params
}
