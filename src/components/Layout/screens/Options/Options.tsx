import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import cn from 'classnames'
import styles from './Options.module.scss'

import { Layout } from '../../Layout'
import { SortOptions } from './Sort-options/Sort-options'
import { FilterOption } from './Filter-option/Filter-option'

import { IFilters } from 'types/filter.type'
import { useActions } from 'hooks/use-actions'
import { useTypedSelector } from 'hooks/use-typed-selector'
import {
	mainFilterOptions,
	advancedFilteroptions
} from './Filter-option/Filter-option.data'

export const Options: FC = () => {
	const [is_advanced_settings, set_advanced_settings] = useState<boolean>(false)
	const { replace } = useRouter()
	const { filters_body } = useTypedSelector(state => state)
	const { changeFiltersBody, changePage } = useActions()
	const { register, handleSubmit } = useForm<IFilters>({
		defaultValues: filters_body
	})

	const onSubmit: SubmitHandler<IFilters> = data => {
		changePage(1)
		changeFiltersBody(data)
		replace('/filters-results')
	}

	return (
		<Layout title='Options' description='Options'>
			<div className={styles.options}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<SortOptions />
					{mainFilterOptions.map(option => (
						<FilterOption key={option.id} {...option} register={register} />
					))}
					{is_advanced_settings &&
						advancedFilteroptions.map(option => (
							<FilterOption key={option.id} {...option} register={register} />
						))}
					<div className={styles.btns}>
						<div
							className={cn(styles.advanced_settings, {
								[styles.active]: is_advanced_settings
							})}
						>
							<div
								onClick={() => set_advanced_settings(prev => !prev)}
								className={styles.switch}
							></div>
						</div>
						<button className={styles.submit} type='submit'>
							Показать результаты
						</button>
					</div>
				</form>
			</div>
		</Layout>
	)
}
