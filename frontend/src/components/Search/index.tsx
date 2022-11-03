import React, { SyntheticEvent } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom';



export const Search = () => {

    const navigate = useNavigate();

    const handleSubmit = (e: SyntheticEvent) => {
        //Prevent Page Reload
        e.preventDefault();

        const target = e.target as typeof e.target & {
            mainSearch: { value: string };
        };

        if (!target || !target.mainSearch || !target.mainSearch.value)
            return;

        navigate(`/api/items?search=${target.mainSearch.value}`);

    }

    return (
        <form className='nav-header-search' action='get' onSubmit={handleSubmit}>
            <div className='nav-header-search-input'>
                <input data-testid="main-search" type="search" name="mainSearch" placeholder='Nunca dejes de buscar' />
            </div>
            <button data-testid="main-search-button" type='submit' className='nav-header-search-button' >
                <img data-testid="main-search-button-img" alt="buscar" src='../../assets/ic_Search.png' />
            </button>
        </form>
    )
}
