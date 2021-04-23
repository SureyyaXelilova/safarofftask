export interface IPostState {
    posts: IPost[],
    loading: boolean
}

export interface IPost {
    id?: number,
    title: string,
    body: string
}

export interface IPostAction {
    type: string
    payload?: IPost[],
}

export interface IPostHandlers {
    [key: string]: (state:IPostState, action: IPostAction) => any,
   
}

export interface IPostForm {
    isFormValid: boolean,
    formControls: IFormControls
}

export interface IFormControls {
    [key: string]: IControlProperty,
}

export interface IFormData {
    [key: string]: string
}

export interface IControlProperty {
    label: string,
    placeholder: string,
    type?: string,
    validation : IValidation,
    valid: boolean,
    touched: boolean,
    value: string,
    errorMessage?: string,
    
}

export interface IValidation {
    required?: boolean
}

export interface IInputProps {
    control: IControlProperty,
    key: number,
    onChange(value: any): any 
}

export interface IButtonProps {
    type?: 'submit' | 'reset' | 'button'; 
    btnName: string,
    disabled?: boolean
    onClick?(): void 
}

export interface IError {
    name: string
    message: string,
    stack: string
}


export interface IErrorRequest {
    name: string
    message: string,
    stack: string,
    description: string | null,
}

export enum AlertType {
    ERROR = 'error',
    SUCCESS = 'success',
}

export interface IErrorState {
    errors: IErrorRequest[],
    loading: boolean
}

export interface IErrorAction {
    type: string
    payload?: IError[],
}

export interface IErrorHandlers {
    [key: string]: (state:IErrorState, action: IErrorAction) => any,
   
}

