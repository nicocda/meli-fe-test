import React from 'react'
import { Link } from 'react-router-dom'
import './p404.scss'

export const P404 = () => {
    return (
        <div className='div404'>
            <span className='logo404'>404</span>
            <span className='text404'>Parece que esta página no existe</span>
            <Link to='/' className='a404'>Ir a la página principal</Link>
        </div >
    )
}
