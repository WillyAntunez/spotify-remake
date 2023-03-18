import { useSelector, useDispatch } from 'react-redux';

import { getToken } from "../api";
import { generateExpirationDate } from '../helpers/generateExpirationDate';
import { AppDispatch, RootState } from '../store';
import { AuthState, setChecking, setError, setVerified } from '../store/slices';

export const useAuthStore = () => {
    const dispatch:AppDispatch = useDispatch();
    const { status, error }:AuthState = useSelector((state : RootState) => state.auth);

    const checkAuthToken = async () =>{
        // TODO: Si el token ya existe en localstorage y no se ha caducado, leerlo de ahí y no volverlo a solicitar
        try {
            dispatch( setChecking() );
            const tokenRes = await getToken();

            dispatch(setVerified( tokenRes ));
            
            localStorage.setItem('TOKEN', JSON.stringify({
                token: tokenRes.access_token,
                expires_in: generateExpirationDate( tokenRes.expires_in ),
            }))
            
        } catch ( error ) {

            console.log(error);
            if(error instanceof Error) {
                dispatch( setError({ msg: error.message  }) );
            }else{
                dispatch( setError({ msg: 'Unknown error.' }) )
            }

        }
    }


    return ({
        // Properties
        status,
        error,
        // Methods
        checkAuthToken,
    })
} 
