import React, { useContext } from 'react';
import Router from './Router.js';
import { ThemeProvider } from "styled-components";
import { ThemeContext } from './contexts/ThemeContext.js';
import { lightTheme, darkTheme } from './styles/GlobalTheme.js';
import { ModalContextProvider } from './contexts/ModalContext.js';
import {GlobalStyles} from './styles/Global.styled.js';

function App() {
  const {theme} = useContext(ThemeContext)
  const mode = theme === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={mode}>
      <ModalContextProvider>
        <GlobalStyles />
        <Router />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
