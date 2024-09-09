import { useNavigate } from "react-router-dom";

// Styles
import "./button.css";

export default function Button({ linkTo }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${linkTo}`);
    }

    return (
        <button 
            className="read-more"
            onClick={handleClick}
        >
            Lees meer
        </button>
    )
}