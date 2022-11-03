import React from 'react'
import './index.scss'


export const BreadCrumb = ({ steps }: { steps: string[] }) => {
    return (
        <>
            <div className='breadcrumb-container'>
                <ul className='breadcrumb'>
                    {steps.map(m => {
                        return < li key={m} className='breadcrumb-item'> {m}</li>
                    })}
                </ul>
            </div>
        </>
    )
}
