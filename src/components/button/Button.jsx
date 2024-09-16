import { useNavigate } from "react-router-dom";

// Styles
import "./button.css";

export default function Button({ linkTo, type, isDisabled }) {
    const navigate = useNavigate();

    const handleClick = () => {
        type != "submit" && navigate(`/${linkTo}`);
    }

    return (
        <button
            className={type === "submit" ? "submit" : "read-more"}
            type={type === "submit" ? "submit" : "navigate"}
            onClick={handleClick}
            disabled={type === "submit" && isDisabled}
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