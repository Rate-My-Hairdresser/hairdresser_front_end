import {
    AppBar,
    Container,
    Typography,
    Toolbar,
} from "@mui/material";
import HairDresserUserMenu from "./hairdresser_usermenu";
import {TitleButton} from "./home";
import { colors } from "../../general/colors";

import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function TopAnchoredMenu() {

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
                                    textDecoration: 'none',
                                    fontSize: 40,
                                    color: colors.text.primary,
                                }}
                            >
                                Rate My Hairdresser
                            </Typography>

                            <HairDresserUserMenu/>
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
                    height: 100,
                    minHeight: 46,
                }
            }
        }
    },
})