import { FC } from 'react'
import styles from './Flats.module.scss'
import { Layout } from '../../Layout'
import { FlatService } from 'services/flat.service'
import { FlatItem } from './FlatItem/FlatItem'
import { IFlat } from 'types/flat.interface'
import { IFlatPage } from './flats.interface'

export const Flats: FC<IFlatPage> = ({ flats }) => {
	return (
		<Layout title='Flats' description='This page with flat list'>
			<div>
				{flats.map(flat => (
					<FlatItem {...flat} />
				))}
			</div>
		</Layout>
	)
}
