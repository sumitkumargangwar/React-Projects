import React from 'react'
import { useParams } from 'react-router-dom'

export default function PageListing() {
    const {pageid} = useParams()
    return (
        <>
            <div className='bg-blue-400 p-10 text-white font-bold text-3xl text-center uppercase'>Page URL I'D :: {pageid}</div>  
        </>
    )
}
