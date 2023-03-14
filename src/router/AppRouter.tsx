import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { getToken } from '../api';

import { PlayerRoutes } from '../player';

const token = await getToken();
console.log(token);

export const AppRouter = () => {
    

    return (
        <Routes>
            <Route path='/*' element={ <PlayerRoutes /> } />
        </Routes>
    )
};
