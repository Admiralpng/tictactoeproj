import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext.js';
import { SFXContext } from '../contexts/SoundEffectsContext.js'
import { HeaderNav } from '../styles/Header.styled.js'
import { LogoIcon, DarkIcon, LightIcon } from './Icons.jsx'

const Header = () => {
    const { hoverSfx, clickSfx } = useContext(SFXContext)
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <HeaderNav>
            <Link to="/" onClick={() => clickSfx()} onMouseEnter={() => hoverSfx()}><LogoIcon /></Link>
            <span onClick={() => { clickSfx(); toggleTheme(); }} className="toggle-button">
                {theme === "dark" ? <LightIcon /> : <DarkIcon />}
            </span>
        </HeaderNav>
    )
}

export default Header