import { useState } from 'react';

// Styles
import "./image.css";

export default function Image({ item }) {
    const { image, alt } = item;

    const [isImageClicked, toggleIsImageClicked] = useState(false);

    const handleImageClick = () => {
        toggleIsImageClicked(!isImageClicked);
    }

    return (
        <>
            <img
                src={image}
                alt={alt}
                className={`clickable-image ${isImageClicked ? 'active' : 'not-active'}`}
                onClick={handleImageClick}
            />
            <div 
                className={`backdrop ${isImageClicked ? 'active' : 'not-active'}`}
                onClick={handleImageClick}
            >
            </div>
        </>
    )
}
