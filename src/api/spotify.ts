import { spotifyApi } from "./"

import { AxiosError } from "axios";

import { Category, Playlist, Recommendations } from "../utils/types";

interface IPagedResponse<T> {
    href: string,
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number,
    items: T[],
}

interface ICategoryResponse  {
    categories: IPagedResponse<Category>;
}

interface IPlaylistResponse {
    playlists: IPagedResponse<Playlist>;
}

const getCategories = async (startFrom:number = 0, limit:number = 20, country:string = 'US') => {
    try {
        if(limit > 50 || limit < 0 ){
            throw new Error('The limit should be a number between 0 and 50');
        }

        const categories = await spotifyApi.get<ICategoryResponse>(
            `/browse/categories?country=${country}&offset=${startFrom}&limit=${limit}`
        );
        
        return categories.data.categories; 
    } catch (error) {
        if( error instanceof AxiosError ){
            throw new Error(`Request error: ${error.message}`);
        }else{
            throw new Error(`Unexpected error: ${error}`)
        }
    }
}

const getCategoryById = async ( id: string ):Promise<Category> => {
    try {
        const category = await spotifyApi<Category>(`/browse/categories/${id}`);
        
        return category.data;
    } catch (error) {
        if( error instanceof AxiosError ){
            throw new Error(`Request error: ${error.message}`);
        }else{
            throw new Error(`Unexpected error: ${error}`)
        }
    }
}

const getPlaylistsByCategory = async (
    category:string, 
    limit:number = 20, 
    offset:number = 0, 
    country:string = 'US'
) => {
    try {
        if(limit > 50 || limit < 0 ){
            throw new Error('The limit should be a number between 0 and 50');
        }

        const url = `/browse/categories/${category}/playlists?offset=${offset}&limit=${limit}&country=${country}`;
        const response = await spotifyApi<IPlaylistResponse>( url );

        return response.data.playlists;
    } catch (error) {
        if( error instanceof AxiosError ){
            throw new Error(`Request error: ${error.message}`);
        }else{
            throw new Error(`Unexpected error: ${error}`)
        }
    }
}

interface IRecomendedTracksQuery  {
    // should
    seed_genres?:string,
    seed_artists?:string,
    seed_tracks?:string,
    limit?: number,
    country?: string;
}

const getRecommendedTracks = async ({
    seed_genres,
    seed_artists,
    seed_tracks,
    limit = 10,
    country = 'US'
}:IRecomendedTracksQuery):Promise<Recommendations> => {
    try {
        if(limit > 50 || limit < 0 ){
            throw new Error('The limit should be a number between 0 and 50');
        }

        if( !seed_genres && !seed_artists && !seed_tracks  ){
            throw new Error('You must send some seed_artist, seed_genre or seed_track.')
        }

        let url = `/recommendations?limit=${limit}&country=${country}`;

        if(seed_artists) url += `&seed_artists=${seed_artists}`;
        if(seed_genres) url += `&seed_genres=${seed_genres}`;
        if(seed_tracks) url += `&seed_tracks=${seed_tracks}`;

        const response = await spotifyApi.get<Recommendations>(url);

        return response.data;
    } catch (error) {
        if( error instanceof AxiosError ){
            throw new Error(`Request error: ${error.message}`);
        }else{
            throw new Error(`Error desconocido: ${error}`)
        }
    }
}

export {
    getCategories,
    getCategoryById,
    getPlaylistsByCategory,
    getRecommendedTracks,
}