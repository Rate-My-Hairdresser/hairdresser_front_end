import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Stack,
    TextField,
    Typography
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import style from "styled-components";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { PreviousPageButton } from "../../components/navigation_drawer/previous";

export default function HairDresserSignUp() {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpw, setConfirmPW] = useState("");
    const [email, setEmail] = useState("");
    const [accountError, setaccountError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [accountErrorMessage, setAccountErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [isStylist, setisStylist] = useState(false);

    const nav = useNavigate();
    const navLogin = () => nav("/auth/login");
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleSubmit = (event) => {
        var passError = false;
        if (account.length === 0) {
            setAccountErrorMessage("Account name is empty!");
            setaccountError(true);
            passError = true;
        }
        if (password.length === 0) {
            setPasswordErrorMessage("Password is empty!");
            setPasswordError(true);
            passError = true;
        }
        if (email.length === 0) {
            setEmailErrorMessage("Email is empty!");
            setEmailError(true);
            passError = true;
        }
        if (!accountError && !passwordError && !emailError && !passError) {
            new FormData(event.currentTarget);
            navLogin();
        } else {
            event.preventDefault();
            return;
        }
        new FormData(event.currentTarget);
        navLogin();
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

    const checkName = (value) => {
        if (value.length > 0) {
            setaccountError(false);
            setAccount(value);
        } else {
            setaccountError(true);
        }
        setAccount(value);
    }

    const checkPassword = (value) => {
        if (value.length < 8) {
            setPasswordErrorMessage("Password must be at least 8 characters");
            setPasswordError(true);
        } else if (value !== confirmpw) {
            setPasswordErrorMessage("Confirmed password does not match");
            setPasswordError(true);
        } else {
            setPasswordErrorMessage("");
            setPasswordError(false);
        }
        setPassword(value);
    }

    const checkConfirm = (value) => {
        if (password.length < 8) {
            setPasswordErrorMessage("Password must be at least 8 characters");
            setPasswordError(true);
        } else if (value !== password) {
            setPasswordErrorMessage("Confirmed password does not match");
            setPasswordError(true);
        } else {
            setPasswordErrorMessage("");
            setPasswordError(false);
        }
        setConfirmPW(value);
    }

    const checkEmail = (value) => {
        if (!re.test(value)) {
            setEmailErrorMessage("Email need to be an email");
            setEmailError(true);
        } else {
            setEmailErrorMessage("");
            setEmailError(false);
        }
        setEmail(value);
    }

    return (
        <MasterBox>
                <SignUpContainer direction="column" justifyContent="space-between">
                    <Typography
                        component="h1"
                        variant="h7"
                        marginBottom="3rem"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Register New Account
                    </Typography>
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
                                value={account}
                                onChange={(e) => checkName(e.target.value)}
                                color={accountError ? 'error' : 'primary'}
                                sx={{ ariaLabel: 'username' }}
                            />
                        </FormControl>
                        <FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormLabel htmlFor="password">New Password (Minimum 8 characters)</FormLabel>
                            </Box>
                            <TextField
                                error={passwordError}
                                name="password"
                                placeholder="new password..."
                                type="password"
                                id="password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                value={password}
                                onChange={(e) => checkPassword(e.target.value)}
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                name="confpassword"
                                placeholder="confirm password..."
                                type="password"
                                id="confpassword"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                value={confirmpw}
                                onChange={(e) => checkConfirm(e.target.value)}
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                error={emailError}
                                helperText={emailErrorMessage}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="example@sample.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                value={email}
                                onChange={(e) => checkEmail(e.target.value)}
                                color={emailError ? 'error' : 'primary'}
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
                        >
                            Register
                        </Button>
                    </Box>
                    <PreviousPageButton />
                </SignUpContainer>
        </MasterBox>
    )
}

const MasterBox = style.div`
    position: fixed;
    top: 5vh;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const SignUpContainer = styled(Stack)(({ theme }) => ({
    position: 'absolute',
    height: 'calc((1 - var(--template-frame-height, 0)) * 60dvh)',
    width: '33%',
    minWidth: '32rem',
    display: 'flex',
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
}));