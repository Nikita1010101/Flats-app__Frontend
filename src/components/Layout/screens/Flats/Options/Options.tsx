import { FC, useState } from 'react'
import styles from './Options.module.scss'

export const Options: FC = () => {
	return (
		<div className={styles.options}>
			<div className={styles.sorting}>
				<ol>
					<li>All</li>
					<li>Floor (ascending)</li>
					<li>Floor (descending)</li>
					<li>Rooms (ascending)</li>
					<li>Rooms (descending)</li>
					<li>Area total (ascending)</li>
					<li>Area total (descending)</li>
					<fieldset></fieldset>
					<li>Area live (ascending)</li>
					<li>Area live (descending)</li>
					<li>Area kitchen (ascending)</li>
					<li>Area kitchen (descending)</li>
					<li>Price (ascending)</li>
					<li>Price (descending)</li>
				</ol>
			</div>
			<div className={styles.filtration}></div>
		</div>
	)
}
