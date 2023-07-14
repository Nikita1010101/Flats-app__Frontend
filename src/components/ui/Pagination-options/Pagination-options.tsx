import { FC } from 'react'
import cn from 'classnames'
import styles from './Pagination-options.module.scss'

import { useActions } from 'hooks/use-actions'
import { useTypedSelector } from 'hooks/use-typed-selector'
import { createPaginationPages } from 'utils/create-pagination-pages'
import { PaginationOptionItem } from './Pagination-option-item/Pagination-option-item'

export const PaginationOptions: FC = () => {
	const {
		query_params: { current_page },
		flats_count: { flats_count }
	} = useTypedSelector(state => state)
	const { changePage } = useActions()

	const pages_total_count = Math.ceil(flats_count / 5)

	const coming_pages = createPaginationPages(current_page, pages_total_count)

	return (
		<div className={styles.pagination}>
			<button
				onClick={() => changePage(current_page - 1)}
				className={cn(styles.btn, { [styles.active]: current_page !== 1 })}
				disabled={current_page === 1}
			>
				Prev
			</button>
			<div className={styles.pagination_btns}>
				<PaginationOptionItem number={1} />
				{coming_pages[0] !== 2 && <div className={styles.dots}>....</div>}
				{coming_pages.map(item => (
					<PaginationOptionItem number={item} />
				))}
				{coming_pages[coming_pages.length - 1] !== pages_total_count - 1 && (
					<div className={styles.dots}>....</div>
				)}
				<PaginationOptionItem number={pages_total_count} />
			</div>
			<button
				onClick={() => changePage(current_page + 1)}
				className={cn(styles.btn, {
					[styles.active]: current_page !== pages_total_count
				})}
				disabled={current_page === pages_total_count}
			>
				Next
			</button>
		</div>
	)
}
