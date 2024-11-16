import {useState} from "react";
import {
    Divider,
    Stack,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {PreviousPageButton} from "./previous";
import HairDresserUserMenu from "./hairdresser_usermenu";
import {selectUser} from "../../general/redux/selectors";
import {useSelector} from "react-redux";
import {TitleButton} from "./home";

export default function TopAnchoredMenu() {
    const user = useSelector(selectUser);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Stack direction="row" spacing={1} bgcolor={"text.secondary"} padding={user.signedIn? 2 : 1}>
            <PreviousPageButton />
            <Divider orientation="vertical" color={"secondary"} flexItem />
            <TitleButton />
            <Divider orientation="vertical" color={"secondary"} flexItem />
            <HairDresserUserMenu handleClick={handleClick} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Stack>
    )
}