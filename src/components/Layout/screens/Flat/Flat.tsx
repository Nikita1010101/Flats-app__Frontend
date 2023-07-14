import { FC } from 'react'
import Image from 'next/image'
import styles from './Flat.module.scss'

import { IFlat } from 'types/flat.interface'

export const Flat: FC<IFlat> = ({
	area_kitchen,
	area_live,
	area_total,
	floor,
	layout_image,
	price,
	rooms
}) => {
	return (
		<div className={styles.flat}>
			<div className={styles.image}>
				<Image
					src={layout_image}
					width={600}
					height={600}
					alt={'Layout Image'}
					quality={100}
					priority
				/>
			</div>
			<table>
				<thead>
					<tr>
						<th>Parameter</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Floor: </td>
						<td>{floor}</td>
					</tr>
					<tr>
						<td>Rooms: </td>
						<td>{rooms}</td>
					</tr>
					<tr>
						<td>Area total: </td>
						<td>{area_total}</td>
					</tr>
					<tr>
						<td>Area live: </td>
						<td>{area_live}</td>
					</tr>
					<tr>
						<td>Area kitchen: </td>
						<td>{area_kitchen}</td>
					</tr>
					<tr>
						<td>Price: </td>
						<td>{price}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
