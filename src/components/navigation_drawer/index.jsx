import {useState} from "react";
import {
    Divider,
    Stack,
    AppBar,
    Container,
    Typography,
    Toolbar,
    Box
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {PreviousPageButton} from "./previous";
import HairDresserUserMenu from "./hairdresser_usermenu";
import {selectUser} from "../../general/redux/selectors";
import {useSelector} from "react-redux";
import {TitleButton} from "./home";

import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function TopAnchoredMenu() {
    const user = useSelector(selectUser);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            <ThemeProvider theme={theme2}>
                <AppBar position="absolute" color="default">
                    <Container maxWidth="1x">
                        <Toolbar disableGutters variant="dense">
                            <PreviousPageButton />
                            <Divider orientation="vertical" color={"secondary"} flexItem />
                            <TitleButton />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                }}
                            >
                                Rate My Hairdresser
                            </Typography>
                            <Container flexItem></Container>
                            <HairDresserUserMenu handleClick={handleClick} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </>
    )
}

const theme2 = createTheme({
    components: {
        MuiToolbar: {
            styleOverrides: {
                dense: {
                    height: 46,
                    minHeight: 46
                }
            }
        }
    },
})