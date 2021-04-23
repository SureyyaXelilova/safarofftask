import { IButtonProps } from "../../../interfaces"

const Button: React.FC<IButtonProps> = (props) =>{
    const type = props.type ? props.type : "submit"
    const disabled = props.disabled ? !props.disabled : false
    return (
        <button 
            className="btn-large waves-effect waves-light mb-20" 
            type={type} 
            onClick={props.onClick} 
            disabled={disabled}
        >  
            {props.btnName} 
            <i className="material-icons right"></i>
        </button>
    )
}
export default Button