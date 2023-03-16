import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITokenResponse } from "../../api";
import { generateExpirationDate } from "../../helpers/generateExpirationDate";

export type AuthState  = {
    status: 'VERIFIED' | 'ERROR' | 'CHECKING';
    error: string | null;
    token: string | null;
    tokenExpiration: string | null;
}

type ErrorPayload = {
    msg: string,
}

const initialState: AuthState = {
    status: "CHECKING",
    error: null,
    token: null,
    tokenExpiration: null,
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setVerified(state, { payload }:PayloadAction<ITokenResponse>):void{
            
            const { access_token, expires_in } = payload;

            state.error = null;
            state.token = `Bearer ${access_token}`;
            state.status = "VERIFIED";
            
            // set token expiration hour
            const dateString = generateExpirationDate(expires_in);

            state.tokenExpiration = dateString; 
        },
        setChecking(state):AuthState{
            return { ...initialState };
        },
        setError(state, { payload }: PayloadAction<ErrorPayload>):AuthState {
            return { 
                ...initialState,
                error: payload.msg,
                status: 'ERROR',
            }
        },
    },
});

export const { setVerified, setChecking, setError } = authSlice.actions;
