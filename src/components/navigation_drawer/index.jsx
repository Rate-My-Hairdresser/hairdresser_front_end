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
import {PreviousPageButton} from "./previous";
import HairDresserUserMenu from "./hairdresser_usermenu";
import {selectUser} from "../../general/redux/selectors";
import {useSelector} from "react-redux";
import {TitleButton} from "./home";

export default function TopAnchoredMenu({ getToken }) {
    const token = null;
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