import { useEffect, useState } from "react"
import { AlertType } from "../../interfaces"
import { AlertContext } from "./AlertContext"

export const AlertState: React.FC = ({children}) => {

    const [alert, setAlert] = useState<boolean>(false)
    const [type, setType ] = useState<'success' | 'error'>()

    const showAlert = (type: AlertType) => {
        setAlert(true)
        setType(type)
    }
    const hideAlert = () => setAlert(false)

    useEffect(() => {
        if(!alert) return
        setTimeout(() => {
            setAlert(false)
        }, 4000)
    }, [alert])

    return (
        <AlertContext.Provider value={{
            alert,
            type,
            showAlert,
            hideAlert
        }}>
            {children}
        </AlertContext.Provider>
    )
}