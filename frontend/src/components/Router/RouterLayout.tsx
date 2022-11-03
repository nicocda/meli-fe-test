import React from 'react'
import { Header } from '../Header'
import { Outlet } from "react-router-dom"

export const RouterLayout = () => {
    return (
        <>
            <Header />

            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}
