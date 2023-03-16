import axios from "axios";

const authApi = axios.create( {
    baseURL: 'https://accounts.spotify.com/api',
});

const spotifyApi = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

spotifyApi.interceptors.request.use( config => {
    const token:string | null = JSON.parse( localStorage.getItem('TOKEN') || '' )?.token;

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config;
});


export { authApi, spotifyApi }