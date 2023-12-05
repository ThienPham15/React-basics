# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

--> how to use useRef
/// App.jsx

import { useRef, useState } from 'react';

...

function App() {
    const timeoutIdRef = useRef(null); 
    //timeoutIdRef is an object with one property - "current":null
...

    function randomNumb() {
        ...
        timeoutIdRef.current = setTimeout(randomNumb, pace);
    }

    function stopHandler() {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
    }
}
