import { rootActions } from '@/store/root-actions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useTypedActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(rootActions, dispatch)
}
