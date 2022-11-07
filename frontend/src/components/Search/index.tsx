import React, { SyntheticEvent, useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom';
import searchIcon from './../../assets/ic_Search.png'
import { Log } from '../../Helper/Log';


export const Search = () => {

    const navigate = useNavigate();
    const [text, setText] = useState('');


    const handleSubmit = (e: SyntheticEvent) => {
        //Prevent Page Reload
        e.preventDefault();

        if (!text) {
            Log("Searching without value")
            navigate('/')
        }
        else {
            Log("Searching with: " + text);
            navigate(`/items?search=${text}`);
        }
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }

    return (
        <form className='nav-header-search' action='get' onSubmit={handleSubmit}>
            <div className='nav-header-search-input'>
                <input data-testid="main-search" type="text" name="mainSearch" placeholder='Nunca dejes de buscar' onChange={handleChange} />
            </div>
            <button data-testid="main-search-button" type='submit' className='nav-header-search-button' >
                <img data-testid="main-search-button-img" alt="buscar" src={searchIcon} />
            </button>
        </form>
    )
}
