import React from 'react'
import './index.scss'


export const BreadCrumb = ({ steps }: { steps: string[] | null }) => {

    if (!steps)
        return (<></>);
    return (
        <>
            <div className='breadcrumb-container'>
                <ul className='breadcrumb'>
                    {steps.map(m => {
                        return (
                            <div key={m}> <span className="greater-separator">{m === steps[0] || '>'}</span> <li className='breadcrumb-item' > {m}</li></div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
