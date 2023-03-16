
import { AxiosError } from 'axios';

import { authApi } from './api';

import { getEnv } from '../helpers';

export interface ITokenResponse {
    access_token: string,
    token_type: string,
    expires_in: number
}

export const getToken = async (): Promise<ITokenResponse> => {
    const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = getEnv();

    const data = new URLSearchParams();
    data.append('client_id', VITE_CLIENT_ID);
    data.append('client_secret', VITE_CLIENT_SECRET);
    data.append('grant_type', 'client_credentials')

    try {
        const res = await authApi.post<ITokenResponse>('/token', data);

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
