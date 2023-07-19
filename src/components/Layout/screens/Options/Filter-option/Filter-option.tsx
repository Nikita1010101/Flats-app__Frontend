import React, { FC } from 'react'
import styles from './Filter-option.module.scss'

import { IFilterOption } from './Filter-option.interface'

export const FilterOption: FC<IFilterOption> = ({
	title,
	name_from,
	name_to,
	options,
	register
}) => {
	return (
		<div className={styles.option}>
			<h3>{title}</h3>
			<div className={styles.inputs}>
				<div className={styles.from}>
					<label htmlFor={name_from}>From</label>
					<input
						type={'number'}
						{...register(name_from, {
							required: true,
							min: options.min,
							max: options.max
						})}
					/>
				</div>
				<div className={styles.to}>
					<label htmlFor={name_to}>To</label>
					<input
						type={'number'}
						{...register(name_to, {
							required: true,
							min: options.min,
							max: options.max
						})}
					/>
				</div>
			</div>
		</div>
	)
}
