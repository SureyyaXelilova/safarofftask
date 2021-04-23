import React, { useContext, useEffect } from 'react';
import { ErrorContext } from '../context/Error/ErrorContext';
import { IErrorRequest } from '../interfaces';


export const ErrorsTable: React.FC = () => {

    const { getErrors, errors, loading } = useContext(ErrorContext)

    useEffect(()=> {
        getErrors()
    }, [])

    const renderTbody = () => {
        return  !loading
                    ?   errors.map((post: IErrorRequest, index: number) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{post.name}</td>
                                    <td>{post.description}</td>
                                    <td>{post.message}</td>
                                    <td>{post.stack}</td>
                                </tr>
                            )
                        })
                    :   <tr><td colSpan={5}>Loading</td></tr> 
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Message</th>
                    <th>Stack</th>
                </tr>
            </thead>
            <tbody>
                {renderTbody()}
            </tbody>
        </table>
    )
}


