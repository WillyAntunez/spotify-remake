
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getEnv } from '../helpers';

interface TokenResponse {
    access_token: string,
    token_type: string,
    expires_in: number
}

const authApi = axios.create( {
    baseURL: 'https://accounts.spotify.com/api',
});

export const getToken = async (): Promise<TokenResponse> => {
    const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = getEnv();

    const data = new URLSearchParams();
    data.append('client_id', VITE_CLIENT_ID);
    data.append('client_secret', VITE_CLIENT_SECRET);
    data.append('grant_type', 'client_credentials')

    try {
        const res = await authApi.post<TokenResponse>('/token', data);

        return res.data;
    } catch (error) {
        console.log( error );

        if( error instanceof AxiosError ){
            throw new Error(`Error con la peticion: ${error.message}`);
        }else{
            throw new Error(`Error desconocido: ${error}`)
        }
    }
};
