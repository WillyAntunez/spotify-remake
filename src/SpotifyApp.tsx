import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

import './SpotifyApp.scss';

export const SpotifyApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
