import { EOptions } from 'types/filter.type'
import { IFilterOption } from './Filter-option.interface'

export const mainFilterOptions: Omit<IFilterOption, 'register'>[] = [
	{
		id: 1,
		title: 'Floor',
		name_from: EOptions.floor_from,
		name_to: EOptions.floor_to,
		options: { min: 1, max: 4 }
	},
	{
		id: 2,
		title: 'Room',
		name_from: EOptions.rooms_from,
		name_to: EOptions.rooms_to,
		options: { min: 1, max: 3 }
	},
	{
		id: 3,
		title: 'Price',
		name_from: EOptions.price_from,
		name_to: EOptions.price_to,
		options: { min: 2_880_000, max: 6_050_000 }
	}
]

export const advancedFilteroptions: Omit<IFilterOption, 'register'>[] = [
	{
		id: 1,
		title: 'Area total',
		name_from: EOptions.area_total_from,
		name_to: EOptions.area_total_to,
		options: { min: 33, max: 86 }
	},
	{
		id: 2,
		title: 'Area live',
		name_from: EOptions.area_live_from,
		name_to: EOptions.area_live_to,
		options: { min: 11, max: 47 }
	},
	{
		id: 3,
		title: 'Area kitchen',
		name_from: EOptions.area_kitchen_from,
		name_to: EOptions.area_kitchen_to,
		options: { min: 11, max: 20 }
	}
]
