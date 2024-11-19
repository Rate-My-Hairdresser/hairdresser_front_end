import {
    Avatar,
    Box,
    Button, Divider,
    FormLabel,
    IconButton, ListItemIcon,
    Menu,
    MenuItem,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";

import styled from "styled-components"
import { colors } from "../../../general/colors"
import {Fragment} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { selectUser } from "../../../general/redux/selectors";
import {Bookmarks, Logout, PersonSearch, Settings} from "@mui/icons-material";
import {signOut} from "../../../general/redux/actions";

export default function HairDresserUserMenu( { handleClick, anchorEl, setAnchorEl }) {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleReturn = () => navigate("/");
    const handleFavorite = () => navigate("/favorites");
    const handleLogin = () => navigate("/login");
    const handleLogout = () => {
        console.log(user);
        dispatch(signOut());
    }

    if (user.signedIn) {
        return (
            <Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: '3rem', height: '3rem' }}>M</Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Your Profile Page
                    </MenuItem>
                    <MenuItem onClick={handleFavorite}>
                        <ListItemIcon>
                            <Bookmarks fontSize="small" />
                        </ListItemIcon>
                        Favorite Profiles
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleReturn}>
                        <ListItemIcon>
                            <PersonSearch fontSize="small" />
                        </ListItemIcon>
                        Return to Main Page
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Fragment>
        )
    } else if (window.location.pathname === "/login" || window.location.pathname === "/register") {
        return null;
    } else {
        return (
            <Button
                type={"button"}
                width={"3rem"}
                variant={"contained"}
                onClick={handleLogin}
            >
                Log In
            </Button>
        )
    }
}