import React from 'react'
import { Search } from '../Search'
import './style.scss'




export const Header = () => {
    return (
        <>
            <header className="nav-header">
                <a href="/" className="nav-logo">
                    <div role="banner">
                        <img data-testid="img-logo" src='../../assets/Logo_ML.png' alt="logo" />
                    </div>
                </a>
                <Search />
            </header>
        </>
    )
}
