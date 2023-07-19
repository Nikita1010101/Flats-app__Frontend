import { ISortOption } from "./Sort-options.interface"

export const nameSortOptionsData: ISortOption[] = [
  {
    label: 'All',
    title: ''
  },
  {
    label: 'Floor',
    title: 'floor'
  },
  {
    label: 'Rooms',
    title: 'rooms'
  },
  {
    label: 'Area total',
    title: 'area_total'
  },
  {
    label: 'Area live',
    title: 'area_live'
  },
  {
    label: 'Area kitchen',
    title: 'area_kitchen'
  },
  {
    label: 'Price',
    title: 'price'
  }
]

export const typeSortOptionsData:ISortOption[] = [
  {
    label: 'All',
    type: ''
  },
  {
    label: 'Ascending',
    type: 'asc'
  },
  {
    label: 'Descending',
    type: 'desc'
  }
]