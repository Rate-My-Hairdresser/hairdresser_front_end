import {
    Box,
    Button,
    Checkbox, Divider,
    FormControl,
    FormControlLabel,
    FormLabel, Grid2,
    Stack,
    TextField,
    Typography
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { colors } from "../../general/colors"
import {useState} from "react";
import {Link} from "react-router-dom";

export default function HairDresserLogin({pass}) {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState("");
    const [open, setOpen] = useState(false);

    const nav = useNavigate();
    const navTo = () => nav("/");

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = (event) => {
        if (loginError) {
            event.preventDefault();
            return;
        }
        const data = new FormData(event.currentTarget);
    }

    const handleSignUp = (event) => {
        pass(true);
    }

    const funcPrototype = () => {
        return true;
    }

    return (
        <Grid2 container>
            <Grid2 size="grow"></Grid2>
            <Grid2 size={4}>
                <SignInContainer direction="column" justifyContent="space-between">
                    <Typography
                        component="h1"
                        variant="h7"
                        sx={{ width: '100%', fontSize: 'clamp(3rem, 10vw, 2.15rem)' }}
                        paddingLeft={4}
                        paddingTop={12}
                    >
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 3,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="email">ID</FormLabel>
                            <TextField
                                error={loginError}
                                helperText={loginErrorMessage}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={loginError ? 'error' : 'primary'}
                                sx={{ ariaLabel: 'email' }}
                            />
                        </FormControl>
                        <FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Link
                                    component="button"
                                    type="button"
                                    onClick={handleClickOpen}
                                    variant="body2"
                                    sx={{ alignSelf: 'baseline' }}
                                >
                                    Forgot your password?
                                </Link>
                            </Box>
                            <TextField
                                error={loginError}
                                helperText={loginErrorMessage}
                                name="password"
                                placeholder="••••••"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={loginError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={navTo}
                        >
                            Sign in
                        </Button>
                        <Button
                            type="button"
                            fullWidth
                            color={"secondary"}
                            variant="contained"
                            onClick={handleSignUp}
                        >
                            Register for new account
                        </Button>
                    </Box>
                </SignInContainer>
            </Grid2>
            <Grid2 size="grow"></Grid2>
        </Grid2>
    )
}

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 60dvh)',
    minHeight: '100%',
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
    },
}));

const Boxing = styled.div`
    background-color: ${colors.offwhite};
    align-self: center;
    max-height: 450px;
    min-height: 200px;
    max-width: 400px;
    min-width: 300px;
    border-radius: 15px;
    padding: 1rem;
`

const TopSection = styled.div`
    width: 100%;
    height: 7rem;
    border-bottom: 1px solid ${colors.secondary};
    display: flex;
    justify-content: space-between;
`