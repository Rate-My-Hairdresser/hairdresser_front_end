import {ArrowBack} from "@mui/icons-material";
import {IconButton, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export function PreviousPageButton({ }) {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    return (
        <IconButton aria-label="backtrace" color="primary" onClick={handleBack} paddingLeft={0} sx={{justifyContent:"left"}}>
            {/*<ArrowBack fontSize={"large"} />*/}
            <Typography sx={{textDecoration: "underline"}}>Not interested? Click here to return.</Typography>
        </IconButton>
    )
}