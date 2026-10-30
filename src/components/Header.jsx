import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext.js';
import { SFXContext } from '../contexts/SoundEffectsContext.js'
import { HeaderNav } from '../styles/Header.styled.js'
import { LogoIcon, DarkIcon, LightIcon } from './Icons.jsx'
import { GameContext } from '../contexts/GameContext.js'

const Header = () => {
    const { hoverSfx, clickSfx } = useContext(SFXContext)
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { gameState, changeTurn } = useContext(GameContext);
    const [timer, setTimer] = useState(10);
    const location = useLocation();
    const inGame = location.pathname === '/game-on';

    useEffect(() => {
        if (!inGame) {
            setTimer(10);
            return;
        }
        const boardEmpty = gameState.board.every(cell => typeof cell === 'number');
        if (boardEmpty) {
            setTimer(10);
            return;
        }
        setTimer(10);
    }, [gameState.turn, inGame]);

    useEffect(() => {
        if (!inGame) {
            return;
        }
        const boardEmpty = gameState.board.every(cell => typeof cell === 'number');
        if (boardEmpty) {
            return;
        }
        if (timer <= 0) {
            changeTurn();
            setTimer(10);
            return;
        }
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer, gameState.board, changeTurn, inGame]
    );

    return (
        <HeaderNav>
            <Link to="/" onClick={() => clickSfx()} onMouseEnter={() => hoverSfx()}><LogoIcon /></Link>
            <div>
                {inGame && !gameState.board.every(cell => typeof cell === 'number') && (
                    <span>{timer}</span>
                )}
                <span onClick={() => { clickSfx(); toggleTheme(); }} className="toggle-button">
                    {theme === "dark" ? <LightIcon /> : <DarkIcon />}
                </span>
            </div>
        </HeaderNav>
    )
}

export default Header
