// Styles
import "./paragraph.css";

export default function Paragraph({ children, image }) {
    const { image: imageUrl, alt } = image || {};

    return (
        <>
            <p className="paragraph-1">
                {children}
            </p>
            {
                imageUrl &&
                    <div>
                        <img className="p-image" src={imageUrl} alt={alt} />
                    </div>
            }
        </>
    )
}