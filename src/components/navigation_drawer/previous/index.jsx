import {ArrowBack} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";

export function PreviousPageButton({ }) {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    return (
        <IconButton aria-label="backtrace" color="primary" onClick={handleBack}>
            <ArrowBack fontSize={"large"} />
        </IconButton>
    )
}