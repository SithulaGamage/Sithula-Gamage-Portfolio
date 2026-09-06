import { useEffect, useState } from 'react';

// Resolves a map of { key: () => import('./file.svg') } into { key: url }
// once, on mount. Keeps dynamic-import galleries out of component bodies.
export function useLazyImages(importers) {
    const [images, setImages] = useState({});

    useEffect(() => {
        let cancelled = false;
        const keys = Object.keys(importers);

        Promise.all(keys.map((key) => importers[key]())).then((modules) => {
            if (cancelled) return;
            const resolved = {};
            keys.forEach((key, index) => {
                resolved[key] = modules[index].default;
            });
            setImages(resolved);
        });

        return () => {
            cancelled = true;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return images;
}

export default useLazyImages;
