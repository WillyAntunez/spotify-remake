import React from 'react'
import { useParams } from 'react-router-dom'

export const Genre = () => {
    
    const { id } = useParams();

    console.log(id);

    return (
        <div>Genre</div>
    )
}
