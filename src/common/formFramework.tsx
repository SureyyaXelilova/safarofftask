import { IControlProperty, IFormControls, IFormData, IPostForm, IValidation } from "../interfaces"


export function createControl(config: any, validation: IValidation): IControlProperty {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export function validate(value: string, validation: IValidation ): boolean {
    if(!validation) {
        return true
    }
    
    let isValid = true

    if(validation.required) {
        isValid = value.trim() !== '' && isValid
    }
    return isValid
}

export function validateForm(formControls: IFormControls): boolean {
    let isFormValid = true
    Object.keys(formControls).forEach(name => {
        isFormValid = formControls[name].valid && isFormValid
    })
    return isFormValid
}

export function changeFormHandler(state: IPostForm, value: string, controlName: string): IPostForm {
    const cloneState = {...state}
    let control = {...state.formControls[controlName]}
    control = cloneState.formControls[controlName]
    cloneState.formControls[controlName] = updateControlProperty(control, value)
    cloneState.isFormValid = validateForm(cloneState.formControls)
    return cloneState
}

function updateControlProperty(control: IControlProperty, value: string): IControlProperty {
    control.value = value
    control.touched = true
    control.valid = validate(value, control.validation)
    return control
}

export function getFormValue(formControls: IFormControls): IFormData {
    const form: IFormData = {}
    Object.keys(formControls).map(key => { 
        form[key] = formControls[key].value
    })
    return form
}

export function postFields(): IFormControls {
    const title = createControl({label: 'Title', placeholder: ''}, {required: true})
    const body = createControl({label: 'Body', placeholder: ''}, {required: true})
    return { title, body }
}