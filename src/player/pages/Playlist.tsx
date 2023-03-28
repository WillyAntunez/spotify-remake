import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPlaylistById } from "../../api";
import { hexToRgb } from "../../helpers/hexToRGB";
import { usePlayerStore } from "../../hooks";
import { IRgbColor } from "../../store";
import { Playlist as IPlaylist } from "../../utils/types";
import { PlayerHero } from "../components"

export const Playlist = () => {

    const { id = '' } = useParams();

    const [playlist, setPlaylist] = useState<IPlaylist>();

    const { setCurrentColor } = usePlayerStore();

    const Fac = new FastAverageColor()

    const getDominantColor  = async (url:string):Promise<void> => {
        const dominantColor = await Fac.getColorAsync(url);
        const [red, green, blue] = dominantColor.value;

        setCurrentColor( {red, green, blue} );
    }

    const getPlaylist = async (id:string) => {
        const playlistResponse = await getPlaylistById(id);
        setPlaylist( playlistResponse );
    }

    useEffect(() => {
        getPlaylist( id );
    }, [])

    useEffect(() => {

        if( playlist?.primary_color && playlist.primary_color !== '#FFFFFF'){
            const RGBColor = hexToRgb( playlist.primary_color );
            setCurrentColor( RGBColor );
        }else if(playlist?.images[0].url){
            getDominantColor(playlist?.images[0].url);
        }

        return () => {
            setCurrentColor( {red: 0, green: 0, blue: 0} )
        }

    }, [playlist])


    return (
        <div className="playlist">
            
            <div className="playlist__hero">
                <PlayerHero 
                    name={ playlist?.name ?? '' }  
                    imageUrl={ playlist?.images[0].url }
                    type="Playlist"
                    description={ playlist?.description }
                    owner={ playlist?.owner }
                    followers={ playlist?.followers.total }
                    count={ playlist?.tracks.total }
                    />
            </div>

        </div>
    )
}
