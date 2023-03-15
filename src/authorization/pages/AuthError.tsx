import React from 'react'
import { useAuthStore } from '../../hooks/useAuthStore'

export const AuthError = () => {

    const { error } = useAuthStore();

    return (
        <div>
            <h1>Authorization error</h1>
            <p>{ error }</p>
            <p> Please check your Spotify credentials </p>
        </div>
    )
}
