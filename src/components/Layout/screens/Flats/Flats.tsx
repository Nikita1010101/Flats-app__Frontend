import { FC, useEffect } from 'react'
import { useQueryClient, useQuery } from '@tanstack/react-query'
import styles from './Flats.module.scss'

import { Layout } from '../../Layout'
import { FlatItem } from './FlatItem/FlatItem'
import { IFlat } from 'types/flat.interface'

import { FlatService } from 'services/flat.service'
import { Options } from './Options/Options'
import { createQueryParams } from 'utils/create-query-params'
import { useTypedSelector } from 'hooks/use-typed-selector'
import { useTypedActions } from 'hooks/use-typed-actions'

export const Flats: FC = () => {
	const queryClient = useQueryClient()
	const { query_params, flats_count } = useTypedSelector(state => state)
	const { changePage, getFlatsCount } = useTypedActions()

	const { page, sort_key, sort_value } = query_params
	const params = createQueryParams(page, sort_key, sort_value)

	const current_page = Math.ceil(flats_count.flats_count / 5)

	const { data: flats, isLoading } = useQuery<IFlat[]>({
		queryKey: ['flats', page, sort_key],
		queryFn: async () => (await FlatService.getAllFlats(params)).data
	})

	useEffect(() => {
		getFlatsCount(0)
	}, [])

	return (
		<Layout title='Flats' description='This page with flat list'>
			<Options />
			<div className={styles.flats}>
				{!isLoading &&
					flats?.map(flat => <FlatItem key={flat._id} {...flat} />)}
			</div>
			<div className={styles.pagination}>
				<button onClick={() => changePage(page - 1)} disabled={page === 1}>
					Prev
				</button>
				<button
					onClick={() => changePage(page + 1)}
					disabled={page === current_page}
				>
					Next
				</button>
			</div>
		</Layout>
	)
}
