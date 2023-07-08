import { NextPage } from 'next'

import { Flats } from '@/components/Layout/screens/Flats/Flats'
import { FlatService } from 'services/flat.service'
import { IFlat } from 'types/flat.interface'
import { IFlatPage } from '@/components/Layout/screens/Flats/flats.interface'

const Home: NextPage<IFlatPage> = ({ flats }) => {
	return <Flats flats={flats} />
}

export default Home

export const getStaticProps = async () => {
	const { data: flats } = await FlatService.getAllFlats()

	return {
		props: {
			flats: flats || ({} as IFlat),
			revalidate: 60
		}
	}
}
