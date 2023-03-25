import { useMemo } from 'react';
import { usePlayerStore } from '../../hooks';
import { useScrollById } from '../../hooks/useScrollById';
import { IRgbColor } from '../../store';

export const useNavbarRgba = () => {
    const { currentColor } = usePlayerStore();
    const { red, green, blue} =  useMemo<IRgbColor>(() => currentColor, [currentColor]);
    const { scrollposition } = useScrollById('playerView');
    const opacity = useMemo<number>( () =>  Math.trunc((scrollposition / 150) * 100), [scrollposition] );

    const navBackgroundRgba = useMemo<string>(() => `rgba(${red}, ${green}, ${blue}, ${opacity}%)`, [scrollposition, currentColor]);

    return {
        navBackgroundRgba,
    }
}