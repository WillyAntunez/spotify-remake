import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPlaylistById } from "../../api";
import { Playlist as IPlaylist } from "../../utils/types";
import { PlayerHero } from "../components"

export const Playlist = () => {

    const { id = '' } = useParams();

    const [playlist, setPlaylist] = useState<IPlaylist>()

    const getPlaylist = async (id:string) => {
        const playlistResponse = await getPlaylistById(id);
        setPlaylist( playlistResponse );
    }

    useEffect(() => {
        getPlaylist( id );
    }, [])

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
