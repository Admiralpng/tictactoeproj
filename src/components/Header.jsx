import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext.js';
import { HeaderNav } from '../styles/Header.styled.js'
import { LogoIcon, DarkIcon, LightIcon } from './Icons.jsx'

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <HeaderNav>
            <LogoIcon />
            <span onClick={toggleTheme} className="toggle-button">
                {theme === "dark" ? <LightIcon /> : <DarkIcon />}
            </span>
        </HeaderNav>
    )
}

export default Header