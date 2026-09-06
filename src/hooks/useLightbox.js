import { useState } from 'react';

// Shared "click an image to expand it" behaviour used across project case studies.
export function useLightbox() {
    const [image, setImage] = useState(null);

    return {
        image,
        open: (src) => setImage(src),
        close: () => setImage(null),
    };
}

export default useLightbox;
