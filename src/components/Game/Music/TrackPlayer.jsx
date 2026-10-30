import React, { useEffect, useState, useRef, useContext } from 'react';
import { MusicWrapper } from '../../../styles/Game Interface/TrackPlayer.styled';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import playlist from '../../../utils/MusicUtils/Playlist';
import { randomizeIndex } from '../../../utils/MusicUtils/indexPL';
import { SFXContext } from '../../../contexts/SoundEffectsContext.js';

export const TrackPlayer = () => {
    const [trackPlaying, setTrackPlaying] = useState(false);
    const [currentTrack, setCurrentSong] = useState(randomizeIndex(playlist))
    const [playPromise, setPlayPromise] = useState(null)
    const playerRef = useRef(null);
    const { hoverSfx, clickSfx } = useContext(SFXContext);

    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.volume = 0.03;
        }
    }, [])

    useEffect(() => {
        if (trackPlaying) {
            const promise = playerRef.current?.play();
            setPlayPromise(promise);
            return
        }
        playerRef.current?.pause()
    }, [trackPlaying])

    const shuffleHandler = async () => {
        await playPromise.then(() => {
            playerRef.current.pause()
            setTrackPlaying(false)
        })
        setCurrentSong(randomizeIndex(playlist));
        setTrackPlaying(true)
    }

    return (
        <MusicWrapper>
            <audio ref={playerRef} src={playlist[currentTrack]} onEnded={shuffleHandler}></audio>
            {trackPlaying ?
                (<button onClick={() => { setTrackPlaying(false); clickSfx() }} onMouseEnter={() => hoverSfx()}><PauseCircleIcon /></button>)
                :
                (<button onClick={() => { setTrackPlaying(true); clickSfx() }} onMouseEnter={() => hoverSfx()}><PlayCircleIcon /></button>)
            }
            <button onClick={shuffleHandler}><ShuffleOnIcon /></button>
        </MusicWrapper>
    )
}
