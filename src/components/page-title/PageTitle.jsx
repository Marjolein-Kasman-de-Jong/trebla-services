// Styles
import "./page-title.css";

export default function PageTitle({ children }) {
    return (
        <h2 className="heading-2 page-title">
            {children}
        </h2>
    )
}