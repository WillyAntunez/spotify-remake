import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';


export const SpotifyApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
