import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { changeFormHandler, getFormValue, postFields } from '../common/formFramework';
import { PostContext } from '../context/Post/PostContext';
import { IPostForm } from '../interfaces';
import Button from './Partials/UI/Button';
import Input from './Partials/UI/Input';

export const PostForm: React.FC = () => {

    const history = useHistory()
    const initialformState: IPostForm = {
        isFormValid: false,
        formControls: postFields()
    }

    const [formState, setformState] = useState<IPostForm>(initialformState)
    const { createPost } = useContext(PostContext)
   
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!formState.isFormValid) return
        const data = getFormValue(formState.formControls) 
        createPost(data, '/').then((res:boolean) => {
            if(res) {
                history.push('/')
            } 
        })
    };

    const renderControls = () => {
        return Object.keys(formState.formControls).map((controlName: string, index: number) => {
            const control = formState.formControls[controlName]
            return (
                <Input 
                    control={control} 
                    key={index} 
                    onChange={e => changeHandler(e, controlName)}
                />
            )
              
        })
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>, controlName: string) => {
        setformState(changeFormHandler(formState,  event.target.value, controlName))
    }

    return (
        <form className="col s12" onSubmit={submit}>
            {renderControls()}
            <Button 
                btnName='Submit'
                disabled={formState.isFormValid}
            />
        </form>
    );
}





