import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from "./GameContext";
import { SFXContextProvider } from "./SoundEffectsContext";

function Provider({children}) {

    return(
        <ThemeContextProvider>
            <GameContextProvider>
                <SFXContextProvider>
                    {children}
                </SFXContextProvider>
            </GameContextProvider>
        </ThemeContextProvider>
    )
}

export default Provider