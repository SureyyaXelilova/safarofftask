import { IPostState, IPostAction , IPostHandlers} from '../../interfaces'
import { GET_POSTS, SET_LOADING } from '../types'

const handlers: IPostHandlers = {
  [GET_POSTS]: (state: IPostState, {payload}: IPostAction) => ({...state, posts: payload, loading: false}),
  [SET_LOADING]: (state: IPostState) => ({...state, loading: true}),
  DEFAULT: (state: IPostState) => state
}

export const PostReducer = (state: IPostState, action: IPostAction) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
