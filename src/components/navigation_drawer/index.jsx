import {Fragment, useState} from "react";
import HairDresserSignInBtn from "../hairdresser_login/SignInButton";
import {
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
    Tooltip,
    Typography
} from "@mui/material";
import {
    ArrowBack,
    ArrowBackOutlined,
    ArrowBackRounded,
    Backspace,
    Bookmarks,
    Logout,
    PersonSearch,
    Settings
} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {PreviousPageButton} from "./previous";
import HairDresserUserMenu from "./hairdresser_usermenu";
import {selectUser} from "../../general/redux/selectors";
import {useSelector} from "react-redux";

export default function TopAnchoredMenu({ getToken }) {
    const token = null;
    const user = useSelector(selectUser);
    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Stack direction="row" spacing={1} bgcolor={"text.secondary"} padding={user.signedIn? 2 : 1}>
            <PreviousPageButton navigate={navigate} />
            <Divider orientation="vertical" color={"secondary"} flexItem />
            <HairDresserUserMenu navigate={navigate} handleClick={handleClick} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Stack>
    )
}