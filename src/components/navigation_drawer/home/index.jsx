import {Home} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { colors } from "../../../general/colors";


export function TitleButton({ }) {
    const navigate = useNavigate();
    const handleTitle = () => navigate("/");

    return (
        <IconButton aria-label="backtrace" onClick={handleTitle} >
            <Home fontSize={'inherit'} style={styles.largeIcon}/>
        </IconButton>
    )
}

const styles = {
    largeIcon: {
        width: 50,
        height: 50,
        color: colors.dark_background,
    }
}