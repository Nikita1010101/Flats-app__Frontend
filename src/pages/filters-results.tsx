import { Flats } from '@/components/Layout/screens/Flats/Flats'
import { useFilters } from 'hooks/use-filters'
import { NextPage } from 'next'

const FiltersResultsPage: NextPage = () => {
	const { flats, is_loading } = useFilters()
	return <Flats flats={flats} is_loading={is_loading} />
}

export default FiltersResultsPage
