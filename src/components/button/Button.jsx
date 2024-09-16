import { useNavigate } from "react-router-dom";

// Styles
import "./button.css";

export default function Button({ linkTo, type }) {
    const navigate = useNavigate();

    const handleClick = () => {
        type != "submit" && navigate(`/${linkTo}`);
    }

    return (
        <button 
            className="read-more"
            type={type === "submit" ? "submit" : "navigate"}
            onClick={handleClick}
        >
            {
                type === "submit" ?
                    "Verstuur"
                    :
                    "Lees meer"
            }
        </button>
    )
}