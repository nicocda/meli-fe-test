import React from 'react'
import './index.scss'
export const Loading = () => {
    return (
        <><div className='loading-container'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <div data-testid='loading'>Cargando ...</div>
        </div>
        </>
    )
}
