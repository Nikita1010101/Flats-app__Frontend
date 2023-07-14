export const createQueryParams = ({
	current_page,
	sort_key,
	sort_value,
	count
}: Partial<{
	current_page: number
	sort_key: string
	sort_value: string
	count: string
}>): string => {
	const params_array: string[] = []

	if (current_page) {
		params_array.push(`_page=${current_page}`)
	}

	if (sort_key && sort_value) {
		params_array.push(`_sort=${sort_key}+${sort_value}`)
	}

	if (count) {
		params_array.push(`_count=${count}`)
	}

	const total_params: string = '?' + params_array.join('&')

	return total_params
}
