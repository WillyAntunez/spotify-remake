import { Route, Routes } from 'react-router-dom';
import { PlayerRoutes } from '../player';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={ <PlayerRoutes /> } />
        </Routes>
    )
};
