import { useContext } from 'react'
import { AlertContext } from '../../../context/Alert/AlertContext'
import './Alert.scss'

const Alert: React.FC = () => {
    let alertText: string = ''
    const { alert, type } = useContext(AlertContext)
    let classNames = ['alert-container']
    classNames.push(type)
    
    if(type === 'success'){
        alertText = 'Success, post created' 
        classNames.push('succes-alert')
    } else {
        alertText = 'Error, please try again'
        classNames.push('error-alert')
    }

    return (
        alert 
            ?
                <div className={classNames.join(' ')}>
                    {alertText}
                </div> 
            :   null
    )
}

export default Alert