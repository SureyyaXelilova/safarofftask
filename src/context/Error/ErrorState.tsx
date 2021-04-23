import axios from "axios"
import { useReducer } from "react"
import { convertFirebaseArray } from "../../common/functions"
import { IError, IErrorRequest, IErrorState } from "../../interfaces"
import { GET_ERRORS, SET_LOADING } from "../types"
import { ErrorContext } from "./ErrorContext"
import { ErrorReducer } from "./ErrorReducer"

export const ErrorState: React.FC = ({children}) => {

    const initialState: IErrorState = {
        errors: [],
        loading: false
    }

    const [state, dispatch] = useReducer(ErrorReducer, initialState) 

    const getErrors = async (): Promise<void> => { 
        setLoading()
        try {
            const res = await axios.get<IErrorState[]>(process.env.REACT_APP_FB + 'errors.json')
            dispatch({
                type: GET_ERRORS,
                payload: convertFirebaseArray(res.data) 
            })
        } catch(e) {
            console.log(e)
        }
    }

    const createError = async (e: IError, description: string | null = null): Promise<void> => {
        const data: IErrorRequest = {
            name: e.name,
            message: e.message,
            stack: e.stack,
            description,
        }
        try {
            await axios.post<IErrorRequest>(process.env.REACT_APP_FB + 'errors.json', data)
        } catch(e) {
            console.log(e)
        }
    }

    const setLoading = () =>  dispatch({ type: SET_LOADING })
    
    const { errors, loading } = state

    return (
        <ErrorContext.Provider value={{
            errors,
            loading,
            getErrors,
            createError
        }}>
            {children}
        </ErrorContext.Provider>
    )
} 