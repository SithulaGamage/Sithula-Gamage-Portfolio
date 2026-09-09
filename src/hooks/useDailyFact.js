import { useEffect, useState } from 'react';

const CACHE_KEY = 'dailyFact';

function todayKey() {
    return new Date().toISOString().slice(0, 10);
}

export function useDailyFact() {
    const [fact, setFact] = useState(null);

    useEffect(() => {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
        if (cached && cached.date === todayKey()) {
            setFact(cached.text);
            return;
        }

        fetch('https://uselessfacts.jsph.pl/api/v2/facts/today?language=en')
            .then((res) => res.json())
            .then((data) => {
                setFact(data.text);
                localStorage.setItem(CACHE_KEY, JSON.stringify({ date: todayKey(), text: data.text }));
            })
            .catch(() => setFact(null));
    }, []);

    return fact;
}

export default useDailyFact;
