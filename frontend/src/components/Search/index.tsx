import React, { SyntheticEvent } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom';
import searchIcon from './../../assets/ic_Search.png'
import { Log } from '../../Helper/Log';



export const Search = () => {

    const navigate = useNavigate();


    const handleSubmit = (e: SyntheticEvent) => {
        //Prevent Page Reload
        e.preventDefault();

        const target = e.target as typeof e.target & {
            mainSearch: { value: string };
        };

        // const text = e && e.target && e.target.mainSearch && e.target.mainSearch.value


        if (!target || !target.mainSearch || !target.mainSearch.value) {
            Log("Searching without value")
            navigate('/')
        }

        Log("Searching with: " + target.mainSearch.value)

        navigate(`/api/items?search=${target.mainSearch.value}`);

    }

    return (
        <form className='nav-header-search' action='get' onSubmit={handleSubmit}>
            <div className='nav-header-search-input'>
                <input data-testid="main-search" type="text" name="mainSearch" placeholder='Nunca dejes de buscar' />
            </div>
            <button data-testid="main-search-button" type='submit' className='nav-header-search-button' >
                <img data-testid="main-search-button-img" alt="buscar" src={searchIcon} />
            </button>
        </form>
    )
}
