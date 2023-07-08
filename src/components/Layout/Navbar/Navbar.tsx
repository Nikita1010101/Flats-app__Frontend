import { FC, useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { floorPahts } from './Navbar.data'
import { IFloorPath } from './Navbar.interface'

export const Navbar: FC = () => {
	const [isFloorsList, setIsFloorsList] = useState<boolean>(false)
	return (
		<div className={styles.navbar}>
			<h2>
				<Link href='/' title='All flats'>
					All flats
				</Link>
			</h2>
			<div className={styles.floors}>
				<h2 onClick={() => setIsFloorsList(prev => !prev)} title='Show floors'>
					Floors
				</h2>
				{isFloorsList && (
					<ol className={styles.page_links}>
						{floorPahts.map(({ id, number, path }) => (
							<li key={id}>
								<Link href={path} title={`Floor ${number}`}>
									{number}
								</Link>
							</li>
						))}
					</ol>
				)}
			</div>
		</div>
	)
}
