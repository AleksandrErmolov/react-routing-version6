import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/hook/useAuth'

export default function CreatePost() {

    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Create post</h1>
            <button onClick={() => signout(() => navigate('/'), {replace:true} )}>Log out</button>
        </div>
    )
}
