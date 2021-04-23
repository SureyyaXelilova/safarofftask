import { useContext } from 'react'
import { SubmitLoadingContext } from '../../../../context/Loading/SubmitLoading/SubmitLoadingContext'
import './SubmitLoading.scss'

const SubmitLoading: React.FC = () => {

    const { loading } = useContext(SubmitLoadingContext)
    
    return (
        loading 
            ?
                <div className="loading-container" >
                    <img src="/gif/Eclipse-0.8s-111px.gif" alt="gif" />
                </div> 
            :   null
    )
}

export default SubmitLoading