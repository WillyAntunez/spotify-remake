import { useRef, useState } from "react";
import { useOutsideAlerter } from "../../hooks";

export const useMenuHandler = () => {

    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const onToggleMenu = (): void => {
        setMenuOpen(!menuOpen);
    };

    const onCloseMenu = (event?: Event): void => {
        const target = event?.target as Node;
        if (menuButtonRef.current && !menuButtonRef.current.contains(target)) {
            setMenuOpen(false);
        }
    };

    useOutsideAlerter(menuRef, onCloseMenu);

    return {
        menuRef,
        menuButtonRef,
        onToggleMenu,
        onCloseMenu,
        menuOpen
    }

}