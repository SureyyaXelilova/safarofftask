import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/Post/PostContext';
import { IPost } from '../interfaces';
import Button from './Partials/UI/Button';


export const PostsTable: React.FC = () => {

    const { getPosts, posts, loading } = useContext(PostContext)

    useEffect(()=> {
        getPosts()
    }, [])

    const renderTbody = () => {
        return  !loading
                    ?   posts.map((post: IPost, index: number) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            )
                        })
                    :   <tr ><td colSpan={3}>Loading</td></tr> 
    }

    return (
        <>
            <Link to="/form">
                <Button type="button"  btnName='Add'/>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTbody()}
                </tbody>
            </table>
        </>
    )
}


