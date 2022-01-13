import React from 'react'
import { Link, useMatch } from 'react-router-dom'

export default function CustomLink({ children, to, ...props }) {
    
    //Получает адрес страницы и делает её ссылкой активной...
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });
    
    return (
        <Link
            to={to}
            style={{ color: match ? 'var(--color-active)' : 'white' }}
            {...props}>
            {children}
        </Link>
    )
}
