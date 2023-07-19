import { FC } from 'react'
import styles from './Flats.module.scss'

import { Layout } from '../../Layout'
import { FlatItem } from './FlatItem/FlatItem'
import { PaginationOptions } from '@/components/ui/Pagination-options/Pagination-options'

import { IFlatsPage } from './Flats.interface'
import { useTypedSelector } from 'hooks/use-typed-selector'

export const Flats: FC<IFlatsPage> = ({ flats, is_loading }) => {
	const { flats_count } = useTypedSelector(state => state.flats_count)
	return (
		<Layout title='Flats' description='This page with flat list'>
			<PaginationOptions />
			<div className={styles.flats}>
				{!is_loading ? (
					flats_count !== 0 ? (
						flats?.map(flat => <FlatItem key={flat._id} {...flat} />)
					) : (
						<h2>Подходящих квартир не найденно!</h2>
					)
				) : (
					<h2>Данные загружаются...</h2>
				)}
			</div>
			<PaginationOptions />
		</Layout>
	)
}
