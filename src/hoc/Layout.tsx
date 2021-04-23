import React from "react"
import { Navbar } from "../components/Partials/Navbar"
import SubmitLoading from "../components/Partials/Loading/SubmitLoading/SubmitLoading"
import Alert from "../components/Partials/Alert/Alert"


export const Layout: React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
            <SubmitLoading/>
            <Alert/>
        </>
    );
}