import { FC } from 'react'
import Image from 'next/image'
import styles from './FlatItem.module.scss'

import { IFlat } from 'types/flat.interface'
import Link from 'next/link'

export const FlatItem: FC<IFlat> = ({
	layout_image,
	floor,
	rooms,
	price,
	_id
}) => {
	return (
		<div className={styles.flat_item}>
			<Image
				src={layout_image}
				width={120}
				height={120}
				alt={'Floor plan'}
				priority
			/>
			<h3>Floor: {floor}</h3>
			<h3>Rooms: {rooms}</h3>
			<h3>Price: {price}</h3>
			<Link href={`/flat/${_id}`}>More</Link>
		</div>
	)
}
