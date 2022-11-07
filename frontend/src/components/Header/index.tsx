import React from 'react'
import { Search } from '../Search'
import './style.scss'
import img from './../../assets/Logo_ML.png'
import { Link } from 'react-router-dom'




export const Header = () => {
    return (
        <>
            <header data-testid='nav-header' className="nav-header">
                <Link to="/" className="nav-logo">
                    <div role="banner">
                        <img data-testid="img-logo" src={img} alt="logo" />
                    </div>
                </Link>
                <Search data-testid='search' />
            </header>
        </>
    )
}
