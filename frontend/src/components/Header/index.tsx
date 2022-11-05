import React from 'react'
import { Search } from '../Search'
import './style.scss'
import img from './../../assets/Logo_ML.png'




export const Header = () => {
    return (
        <>
            <header data-testid='nav-header' className="nav-header">
                <a href="/" className="nav-logo">
                    <div role="banner">
                        <img data-testid="img-logo" src={img} alt="logo" />
                    </div>
                </a>
                <Search data-testid='search' />
            </header>
        </>
    )
}
