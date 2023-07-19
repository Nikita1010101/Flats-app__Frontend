import { FC } from 'react'
import Select, { SingleValue } from 'react-select'
import styles from './Sort-options.module.scss'

import { ISortOption } from './Sort-options.interface'
import { useActions } from 'hooks/use-actions'
import { nameSortOptionsData, typeSortOptionsData } from './Sort-option.data'

export const SortOptions: FC = () => {
	const { changeSortName, changeSortType } = useActions()

	const onChangeName = (option: SingleValue<ISortOption>): void => {
		changeSortName(String(option?.title))
	}

	const onChangeType = (option: SingleValue<ISortOption>): void => {
		changeSortType(String(option?.type))
	}

	return (
		<div className={styles.options}>
			<div className={styles.name}>
				<h3>Name</h3>
				<Select
					onChange={onChangeName}
					options={nameSortOptionsData}
					placeholder='Select name'
				/>
			</div>
			<div className={styles.type}>
				<h3>Type</h3>
				<Select
					onChange={onChangeType}
					options={typeSortOptionsData}
					placeholder='Select type'
				/>
			</div>
		</div>
	)
}
