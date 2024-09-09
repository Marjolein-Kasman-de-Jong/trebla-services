// Styles
import "./service-highlight.css";

export default function ServiceHighlight({ children }) {
    return (
        <section className="service-highlight">
            <p className="paragraph-3">
                {children}
            </p>
        </section>
    )
}