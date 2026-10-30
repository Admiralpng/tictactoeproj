import { createContext } from "react";
import { useSFX } from "../hooks/SFXHook";
import click from "../assets/SFX/Interactives/click.wav"
import hover from "../assets/SFX/Interactives/hover.wav"
import menuHover1 from "../assets/SFX/Interactives/MenuHover1.wav"
import menuHover2 from "../assets/SFX/Interactives/MenuHover2.wav"
import victory from "../assets/SFX/Interactives/VictoryChord3.wav"
import draw from "../assets/SFX/Interactives/Draw.wav"
import reset from "../assets/SFX/Interactives/Restart.wav"

export const SFXContext = createContext({});

export const SFXContextProvider = ({children}) => {
    const options = {
        volume: 2,
    }
    
    const hoverSfx = useSFX(hover, options.volume);
    const clickSfx = useSFX(click, options.volume);
    const roundUpSfx = useSFX(victory, options.volume);
    const drawSfx = useSFX(draw, options.volume);
    const menuHover1Sfx = useSFX(menuHover1, options.volume);
    const menuHover2Sfx = useSFX(menuHover2, options.volume);
    const restartGameSfx = useSFX(reset, options.volume)

    return (
            <SFXContext.Provider value={{ hoverSfx, clickSfx, roundUpSfx, drawSfx, menuHover1Sfx, menuHover2Sfx, restartGameSfx }}>
                {children}
            </SFXContext.Provider>
        )
}
