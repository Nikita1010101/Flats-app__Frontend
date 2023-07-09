export const createQueryParams = (
	page: number,
	sort_key: string,
	sort_value: string
): string => {
	const page_params: string = page ? `page=${page}` : ''
	const sort_params: string =
		sort_key && sort_value ? `&sort=${sort_key}+${sort_value}` : ''

	const total_params: string = `?${page_params}${sort_params}`

	return total_params
}
