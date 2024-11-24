import {Home} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";


export function TitleButton({ }) {
    const navigate = useNavigate();
    const handleTitle = () => navigate("/");

    return (
        <IconButton aria-label="backtrace" color="primary" onClick={handleTitle}>
            <Home fontSize={"large"} />
        </IconButton>
    )
}