import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom'

import { getCategoryById, getPlaylistsByCategory } from '../../api';

import { PlayerHero, CardGroup, PlayerViewFooter, PlaylistCard, NavbarPortal } from '../components';

import './Genre.scss';

import { Category, Playlist } from '../../utils/types';
import { useScrollById } from '../../hooks';

export const Genre = () => {
    const { id = '' } = useParams();

    const { scrollposition } = useScrollById('playerView');
    const showNavbarTitle = useMemo<Boolean>( () => scrollposition > 150 , [scrollposition] );

    const [category, setCategory] = useState<Category>({
        name: '',
        href: '',
        icons: [],
        id: '',
    })
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    const getGenreInfo = async () => {
        try {
            const categoryPromise = getCategoryById(id);
            const playlistsPromise = getPlaylistsByCategory(id);

            const [categoryRes, playlistsRes] = await Promise.all([
                categoryPromise,
                playlistsPromise
            ]);

            setPlaylists(playlistsRes.items);
            setCategory(categoryRes);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getGenreInfo();
    }, [])


    return (
        <>
            <NavbarPortal >
                <span className="genre__portaltitle" style={ { opacity: showNavbarTitle ? 1 : 0 } }>
                    { category?.name }
                </span>
            </NavbarPortal>

            <div className='genre'>
                <div className='genre__hero'>
                    <PlayerHero name={category?.name} />
                </div>

                <div className="genre__content">
                    <div className="genre__cardwrapper">
                        <CardGroup
                            title={`Playlists populares de ${category.name}`}
                            url="/"
                            type="line"
                        >
                            {
                                playlists.map((playlist, index) =>
                                    <PlaylistCard
                                        name={playlist?.name}
                                        description={playlist?.description || ''}
                                        imageUrl={playlist?.images[0].url}
                                        playlistId={playlist?.id}
                                        url={`/playlist/${playlist?.id}`}
                                        key={index}
                                    />
                                )
                            }
                        </CardGroup>
                    </div>

                </div>

                <PlayerViewFooter />
            </div>
        </>

    )
}
