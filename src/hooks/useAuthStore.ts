import { useSelector, useDispatch } from 'react-redux';

import { getToken } from "../api";
import { AppDispatch, RootState } from '../store';
import { AuthState, setChecking, setError, setVerified } from '../store/slices';

export const useAuthStore = () => {
    const dispatch:AppDispatch = useDispatch();
    const { status, error }:AuthState = useSelector((state : RootState) => state.auth);

    const checkAuthToken = async () =>{
        try {
            dispatch( setChecking() );
            const token = await getToken();

            dispatch(setVerified( token ));
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
