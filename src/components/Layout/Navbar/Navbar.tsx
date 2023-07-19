import { FC } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

export const Navbar: FC = () => {
	return (
		<div className={styles.navbar}>
			<h2>
				<Link href='/' title='All flats'>
					All flats
				</Link>
			</h2>
			<h2>
				<Link href='/options' title='Options'>
					Options
				</Link>
			</h2>
		</div>
	)
}
