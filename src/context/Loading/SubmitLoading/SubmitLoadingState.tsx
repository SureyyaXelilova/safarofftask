import { useState } from "react"
import { SubmitLoadingContext } from "./SubmitLoadingContext"


export const SubmitLoadingState: React.FC = ({children}) => {

    const [loading, setLoading] = useState<boolean>(false)

    const showLoading = () => setLoading(true)
    const hideLoading = () => setLoading(false)

    return (
        <SubmitLoadingContext.Provider value={{
            loading,
            showLoading,
            hideLoading
        }}>
            {children}
        </SubmitLoadingContext.Provider>
    )
}