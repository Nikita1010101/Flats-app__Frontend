import { NextPage } from 'next'

import { Flats } from '@/components/Layout/screens/Flats/Flats'

import { useAllFlats } from 'hooks/use-all-flats'

const HomePage: NextPage = () => {
	const { flats, is_loading } = useAllFlats()
	return <Flats flats={flats} is_loading={is_loading} />
}

export default HomePage
