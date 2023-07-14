import { FC } from 'react'
import styles from './Flats.module.scss'

import { Options } from './Options/Options'
import { PaginationOptions } from '@/components/ui/Pagination-options/Pagination-options'
import { Layout } from '../../Layout'
import { FlatItem } from './FlatItem/FlatItem'

import { useAllFlats } from 'hooks/use-all-flats'

export const Flats: FC = () => {
	const { flats, isLoading } = useAllFlats()

	return (
		<Layout title='Flats' description='This page with flat list'>
			<Options />
			<PaginationOptions />
			<div className={styles.flats}>
				{!isLoading &&
					flats?.map(flat => <FlatItem key={flat._id} {...flat} />)}
			</div>
			<PaginationOptions />
		</Layout>
	)
}
