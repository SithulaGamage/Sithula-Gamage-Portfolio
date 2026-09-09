import { useCallback, useEffect, useState } from 'react';

const THEME_EVENT = 'app:themechange';

function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const onChange = (event) => setTheme(event.detail);
        window.addEventListener(THEME_EVENT, onChange);
        return () => window.removeEventListener(THEME_EVENT, onChange);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => {
            const next = prev === 'dark' ? 'light' : 'dark';
            window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: next }));
            return next;
        });
    }, []);

    return [theme, toggleTheme];
}

export default useTheme;
