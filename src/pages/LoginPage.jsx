import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../components/hook/useAuth';

export default function LoginPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const { signin } = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signin(user, () => navigate(fromPage, { replace: true }));
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    name:
                    <input name='username' />
                </label>
                <button type='sumbmit'>Login</button>
            </form>
        </div>
    )
}
