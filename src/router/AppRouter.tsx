import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthChecking, AuthError } from '../authorization/pages';
import { useAuthStore } from '../hooks/useAuthStore';

import { PlayerRoutes } from '../player';


export const AppRouter = () => {

    const { checkAuthToken, status } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    if(status === 'CHECKING') {
        return (
            <Routes>
                <Route path='/' element={ <AuthChecking /> } />
                <Route path='/*' element={ <Navigate to={'/'} /> } />
            </Routes>
        )
    };

    return (
        <Routes>
            {
                status !== 'ERROR' 
                ? ( <Route path='/*' element={ <PlayerRoutes /> } /> )
                : ( <Route path='/*' element={ <AuthError /> } />  )
            }     
        </Routes>
    )
};
