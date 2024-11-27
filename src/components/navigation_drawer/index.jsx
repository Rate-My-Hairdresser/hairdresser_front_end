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
import { colors } from "../../general/colors";

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
                <AppBar position="fixed" color="default" sx={{backgroundColor: colors.background, width: '100%', left: 0}} >
                    <Container maxWidth="1x">
                        <Toolbar disableGutters variant="dense">
                            {/* <PreviousPageButton /> */}
                            {/* <Divider orientation="vertical" color={"secondary"} flexItem /> */}
                            <TitleButton />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontWeight: 100,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    fontSize: 40,
                                    color: colors.text.primary,
                                }}
                            >
                                Rate My Hairdresser
                            </Typography>

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
                    height: 75,
                    minHeight: 50,
                }
            }
        }
    },
})