import { FC } from 'react'
import styles from './Options.module.scss'

export const Options: FC = () => {
	return (
		<div className={styles.options}>
			<div className={styles.sorting}></div>
			<div className={styles.filtration}></div>
		</div>
	)
}
