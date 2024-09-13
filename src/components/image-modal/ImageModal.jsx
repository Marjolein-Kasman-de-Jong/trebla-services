import { useState } from "react";

// Styles
import "./image-modal.css";

export default function ImageModal({ img }) {
    const { image, alt } = img;
    const [isImageClicked, toggleIsImageClicked] = useState(false);

    const handleImageClick = () => {
        toggleIsImageClicked(!isImageClicked);
    }

    return (
        <>
            {/* Image */}
            <img
                src={image}
                alt={alt}
                className={`clickable-image ${isImageClicked ? 'active' : 'not-active'}`}
                onClick={handleImageClick}
            />
            {/* Backdrop */}
            <div 
                className={`backdrop ${isImageClicked ? 'active' : 'not-active'}`}
                onClick={handleImageClick}
            >
            </div>
        </>
    )
}