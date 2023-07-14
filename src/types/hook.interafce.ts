import { IFlat } from './flat.interface'

export interface IUseAllFlats {
	flats?: IFlat[]
	isLoading: boolean
}

export interface IUseOneFloor {
	flats?: IFlat[]
	isLoading: boolean
}

export interface IUseOneFlat {
	flat?: IFlat
	isLoading: boolean
}
