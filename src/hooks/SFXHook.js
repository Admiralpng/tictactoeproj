import { useEffect, useRef } from 'react'

export const useSFX = (url, sfxoptions = {}) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (!url) return;
        const audio = new Audio(url);
        audio.volume = sfxoptions.volume ?? 0.5;
        audio.preload = 'auto';
        audioRef.current = audio;

        return () => {
            audioRef.current = null;
        };
    }, [url, sfxoptions.volume]);

    const play = () => {
        const audio = audioRef.current;
        if (!audio) return;
        try {
            audio.currentTime = 0;
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Autoplay blocked by browser - ignore silently
                });
            }
        } catch (e) {
            // Ignore errors
        }
    };

    return play;
}
