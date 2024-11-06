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

export default function HairDresserSignUp() {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [accountError, setaccountError] = useState(false);
    const [accountErrorMessage, setaccountErrorMessage] = useState("");
    const [isStylist, setisStylist] = useState(false);

    const nav = useNavigate();
    const navLogin = () => nav("/login");

    const handleSubmit = (event) => {
        if (accountError) {
            event.preventDefault();
            return;
        }
        const data =new FormData(event.currentTarget);
    }

    const handleCheckbox = (event) => {
        if (isStylist) {
            setisStylist(false);
        } else {
            setisStylist(true);
        }
    }

    function StylistForm() {
        return null;
        if (isStylist) {
            return <FormControl>
                    <FormLabel htmlFor="address">Salon Address</FormLabel>
                    <TextField
                        error={accountError}
                        helperText={accountErrorMessage}
                        id="address"
                        type="address"
                        name="address"
                        placeholder="Address..."
                        autoComplete="address"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={accountError ? 'error' : 'primary'}
                        sx={{ ariaLabel: 'address' }}
                    />
                </FormControl>
        } else {
            return null
        }
    }

    const funcPrototype = () => {
        return true;
    }

    return (
        <Grid2 container>
            <Grid2 size="grow"></Grid2>
            <Grid2 size={4}>
                <SignInContainer direction="column" alignItems="center" justifyContent="space-between">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Sign in
                    </Typography>
                    <div style={{height: '3rem'}}></div>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <TextField
                                error={accountError}
                                helperText={accountErrorMessage}
                                id="username"
                                type="username"
                                name="username"
                                placeholder="new username..."
                                autoComplete="username"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={accountError ? 'error' : 'primary'}
                                sx={{ ariaLabel: 'username' }}
                            />
                        </FormControl>
                        <FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormLabel htmlFor="password">New Password</FormLabel>
                            </Box>
                            <TextField
                                error={accountError}
                                helperText={accountErrorMessage}
                                name="password"
                                placeholder="new password..."
                                type="password"
                                id="password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={accountError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                error={accountError}
                                helperText={accountErrorMessage}
                                name="confpassword"
                                placeholder="confirm password..."
                                type="confpassword"
                                id="confpassword"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={accountError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                error={accountError}
                                helperText={accountErrorMessage}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="example@sample.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={accountError ? 'error' : 'primary'}
                                sx={{ ariaLabel: 'email' }}
                            />
                        </FormControl>
                        <FormControlLabel
                            onChange={handleCheckbox}
                            control={<Checkbox value="stylist" color="primary" />}
                            label="I am a stylist"
                        />
                        <StylistForm/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={navLogin}
                        >
                            Register
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
    maxHeight: '300%',
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
    max-height: 650px;
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