import {
    Avatar,
    Box,
    Button,
    IconButton,
    Tooltip,
} from "@mui/material";

import { colors } from "../../../general/colors"
import {Fragment} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useSelector} from 'react-redux';
import { selectUser } from "../../../general/redux/selectors";
import MenuSelect from "./variant_menu";

export default function HairDresserUserMenu( { handleClick, anchorEl, setAnchorEl }) {
    const user = useSelector(selectUser)
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthPath = location.pathname.startsWith('/auth');

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogin = () => navigate("/auth/login");

    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    if (user.signedIn) {
        const name = sessionStorage.getItem("name") + " " + sessionStorage.getItem("lastname");
        const isStylist = sessionStorage.getItem("isStylist")

        return (
            <div style={{marginLeft: 'auto'}}>
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
                            <Avatar sx={{ width: '3rem', height: '3rem' }} {...stringAvatar(name)} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <MenuSelect userType={isStylist} name={name} open={open} handleClose={handleClose} anchorEl={anchorEl} stringAvatar={stringAvatar} />
            </Fragment>
            </div>
        )
    } else {
        sessionStorage.clear()
        if (isAuthPath) {
            return null;
        } else {
            return (
                <div style={{marginLeft: 'auto'}}>
                <Button
                    position={"absolute"}
                    type={"button"}
                    width={"3rem"}
                    sx={{minWidth: 82}}
                    variant={"contained"}
                    onClick={handleLogin}
                    style={{backgroundColor: colors.dark_background, color: colors.text.primary, marginLeft: 'auto', right: 0}}
                >
                    Log In
                </Button>
                </div>
            )
        }        
    }
}