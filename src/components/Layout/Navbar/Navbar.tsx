import { FC, useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

import { floorPahts } from './Navbar.data'

export const Navbar: FC = () => {
	const [isFloorsList, setIsFloorsList] = useState<boolean>(false)
	return (
		<div className={styles.navbar}>
			<h2>
				<Link href='/' title='All flats'>
					All flats
				</Link>
			</h2>
		</div>
	)
}
