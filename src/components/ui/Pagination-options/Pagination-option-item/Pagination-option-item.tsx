import { FC } from 'react'
import cn from 'classnames'
import styles from './Pagination-option-item.module.scss'

import { useTypedSelector } from 'hooks/use-typed-selector'
import { useActions } from 'hooks/use-actions'

export const PaginationOptionItem: FC<{ number: number }> = ({ number }) => {
	const { current_page } = useTypedSelector(state => state.query_params)
	const { changePage } = useActions()
	return (
		<div
			onClick={() => changePage(number)}
			className={cn(styles.pagination_btn, {
				[styles.active]: current_page === number
			})}
		>
			{number}
		</div>
	)
}
