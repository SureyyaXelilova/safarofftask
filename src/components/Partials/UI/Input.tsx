import { IInputProps, IControlProperty } from "../../../interfaces"


function isInvalid({valid, touched, validation}:IControlProperty) {
    const shouldValidate = !!validation
    return  !valid  && shouldValidate && touched 
}

const Input: React.FC<IInputProps> = (props) => {

    let classNames = ['validate']

    const control = props.control

    const inputType = control.type || 'text'
    
    if(isInvalid(control)) {
        classNames.push('invalid')
    }else {
        classNames.filter(classNameItem=> classNameItem !== 'invalid')
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input 
                    id={control.label} 
                    className={classNames.join(' ')}
                    type={inputType}
                    placeholder={control.placeholder}
                    onChange={props.onChange}
                    value={control.value}
                />
                <label htmlFor={control.label} >{control.label}</label>
                <span className="helper-text" data-error={control.errorMessage || "Enter correct value" }></span> 
            </div>
        </div>
    )
}

export default Input