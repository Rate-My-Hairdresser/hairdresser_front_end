import {Home} from "@mui/icons-material";
import {IconButton} from "@mui/material";


export function TitleButton({ navigate }) {
    const handleTitle = () => navigate("/");

    return (
        <IconButton aria-label="backtrace" color="primary" onClick={handleTitle}>
            <Home fontSize={"large"} />
        </IconButton>
    )
}