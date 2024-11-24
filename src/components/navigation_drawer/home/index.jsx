import {Home} from "@mui/icons-material";
import {IconButton, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


export function TitleButton({ }) {
    const navigate = useNavigate();
    const handleTitle = () => navigate("/");

    return (
        <IconButton aria-label="backtrace" color="primary" onClick={handleTitle}>
            <Home fontSize={"large"} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                mr: 0,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Rate My Hairdresser
            </Typography>
        </IconButton>
    )
}