export interface IFilters {
	floor_from: number
	floor_to: number
	rooms_from: number
	rooms_to: number
	area_total_from: number
	area_total_to: number
	area_live_from: number
	area_live_to: number
	area_kitchen_from: number
	area_kitchen_to: number
	price_from: number
	price_to: number
}

export enum EOptions {
	floor_from = 'floor_from',
	floor_to = 'floor_to',
	rooms_from = 'rooms_from',
	rooms_to = 'rooms_to',
	area_total_from = 'area_total_from',
	area_total_to = 'area_total_to',
	area_live_from = 'area_live_from',
	area_live_to = 'area_live_to',
	area_kitchen_from = 'area_kitchen_from',
	area_kitchen_to = 'area_kitchen_to',
	price_from = 'price_from',
	price_to = 'price_to'
}
