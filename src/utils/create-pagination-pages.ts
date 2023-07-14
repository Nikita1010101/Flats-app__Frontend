export const createPaginationPages = (
	current_page: number,
	pages_total_count: number
): number[] => {
	const findCenter = (): number => {
		if (current_page < 5) {
			return 5
		}

		if (current_page > pages_total_count - 4) {
			return pages_total_count - 4
		}

		return current_page
	}

	const pages_array: number[] = []

	const step: number = 3
	const center: number = findCenter()

	const min: number = pages_total_count < 10 ? 2 : center - step
	const max: number =
		pages_total_count < 10 ? pages_total_count - 1 : center + step

	for (let index = min; index < max + 1; index++) {
		pages_array.push(index)
	}

	return pages_array
}
