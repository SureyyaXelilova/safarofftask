import axios from "axios"
import { useContext, useReducer} from "react"
import { convertFirebaseArray } from "../../common/functions"
import { IPost, IPostState } from "../../interfaces"
import { AlertContext } from "../Alert/AlertContext"
import { ErrorContext } from "../Error/ErrorContext"
import { SubmitLoadingContext } from "../Loading/SubmitLoading/SubmitLoadingContext"
import { GET_POSTS, SET_LOADING } from "../types"
import { PostContext } from "./PostContext"
import { PostReducer } from "./PostReducer"

export const PostState:React.FC = ({children}) => {

    const initialState: IPostState = {
        posts: [],
        loading: false
    }
  
    const { createError } = useContext(ErrorContext) 
    const { hideLoading, showLoading } = useContext(SubmitLoadingContext)
    const { showAlert } = useContext(AlertContext)
    const [state, dispatch] = useReducer(PostReducer, initialState) 
    
    const getPosts = async ():Promise<void> => { 
        setLoading()
        try {
            const res = await axios.get<IPost[]>(process.env.REACT_APP_FB + 'posts.json') 
            dispatch({
                type: GET_POSTS,
                payload: convertFirebaseArray(res.data) 
            })
        } catch(e) {
            createError(e, 'Error when fetch posts')
        }
    }

    const createPost = async (data: IPost): Promise<boolean> => {
        showLoading()
        try {
            await axios.post<IPost>(process.env.REACT_APP_FB + 'posts.json', data)
            hideLoading()
            showAlert('success')
            return true
        } catch(e) {
            hideLoading()
            showAlert('error')
            createError(e, 'Error when create post')
            return false
        }
    }

    const setLoading = () =>  dispatch({ type: SET_LOADING })

    const { posts, loading } = state

    return (
        <PostContext.Provider value={{
            getPosts,
            createPost,
            posts,
            loading
        }}>
            {children}
        </PostContext.Provider>
    )
} 