import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { IFlatPage } from '@/components/Layout/screens/Flat/Flat.interface'
import { Flat } from '@/components/Layout/screens/Flat/Flat'
import { FlatService } from 'services/flat.service'
import { IFlat } from 'types/flat.interface'

const FlatPage: NextPage<IFlatPage> = ({ flat }) => {
	return <Flat {...flat} />
}

export default FlatPage

export interface IParams extends ParsedUrlQuery {
	id: string
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
	try {
		const { data: flats } = await FlatService.getAllFlats()

		const paths = flats.map(({ _id }) => ({
			params: {
				id: String(_id)
			}
		}))

		return {
			paths: paths,
			fallback: 'blocking'
		}
	} catch (error) {
		throw error
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: flat } = await FlatService.getOneFlat(String(params?.id))

		return {
			props: { flat: flat || ({} as IFlat) },
			revalidate: 600
		}
	} catch (error) {
		throw error
	}
}
