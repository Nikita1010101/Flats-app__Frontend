import { UseFormRegister } from 'react-hook-form'

import { EOptions, IFilters } from 'types/query.type'

export interface IFilterValidateOptions {
	min: number
	max: number
}

export interface IFilterOption {
	id: number
	title: string
	name_from: EOptions
	name_to: EOptions
	options: IFilterValidateOptions
	register: UseFormRegister<IFilters>
}
