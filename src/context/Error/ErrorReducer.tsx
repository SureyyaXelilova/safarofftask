import { IErrorHandlers, IErrorState, IErrorAction} from '../../interfaces'
import { GET_ERRORS, SET_LOADING } from '../types'

const handlers: IErrorHandlers = {
  [GET_ERRORS]: (state: IErrorState, {payload}: IErrorAction) => ({...state, errors: payload, loading: false}),
  [SET_LOADING]: (state: IErrorState) => ({...state, loading: true}),
  DEFAULT: (state: IErrorState) => state
}

export const ErrorReducer = (state: IErrorState, action: IErrorAction) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
