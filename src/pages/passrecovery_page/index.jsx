
import style from "styled-components";
import { styled } from '@mui/material/styles';
import { Card, Typography, Container, Stack, CardContent
    , TextField, FormControl, Button, Box, FormLabel, Divider
 } from "@mui/material";
import { useState } from "react";

const PasswordRecoveryPage = () => {

    const [password, setPassword] = useState("");
    const [confirmpw, setConfirmPW] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [verify, setVerify] = useState("");
    const [verifyError, setVerifyError] = useState(true);
    const [verifyErrorMessage, setVerifyErrorMessage] = useState("");

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

    const checkPassword = (value) => {
        if (value.length < 8) {
            setPasswordErrorMessage("Password must be longer than 8 characters");
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
        if (value !== password) {
            setPasswordErrorMessage("Confirmed password does not match");
            setPasswordError(true);
        } else {
            setPasswordErrorMessage("");
            setPasswordError(false);
        }
        setConfirmPW(value);
    }

    const checkVerify = (value) => {
        if (value !== "A123B456") {
            setVerifyErrorMessage("Verification code is incorrect");
            setVerifyError(true);
        } else {
            setVerifyErrorMessage("");
            setVerifyError(false);
        }
        setVerify(value);
    }

    return (
        <MasterBox >
            <SignInContainer>
                <Container />
                <Card styled={styles.cardImage} elevation={6}>
                    <CardContent>
                        <Typography
                            component="h1"
                            variant="h7"
                            sx={{ width: '100%', fontSize: 'clamp(3rem, 10vw, 2.15rem)' }}
                            paddingLeft={3}
                            paddingRight={3}
                            paddingBottom={2}
                        >
                            Forgot the Password?
                        </Typography>
                        <Typography
                            component="h2"
                            variant="h1"
                            sx={{ width: '100%', fontSize: 'clamp(1rem, 10vw, 0.15rem)', wordBreak: "break-word" }}
                        >
                            Don't worry, we can reset it for you, with account email.
                        </Typography>
                        <Typography inline>
                            We will send you verification code for the password change.
                        </Typography>
                        <Typography inline>
                            Code will be valid for 30 minutes.
                        </Typography>
                        <FormControl display="flex" sx={{flexDirection: "row"}}>
                            <TextField
                                label="email"
                                error={emailError}
                                helperText={emailErrorMessage}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                fullWidth
                                variant="outlined"
                                value={email}
                                onChange={(e) => checkEmail(e.target.value)}
                                sx={{ ariaLabel: 'email' }}
                            />
                            <Button variant="contained" size="small" disabled={emailError}>
                                Send
                            </Button>
                        </FormControl>
                        <Stack paddingTop={2} width={"20rem"} alignItems={"normal"}>
                            <Divider />
                            <FormControl>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} paddingTop={2}>
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
                        </Stack>
                        <FormControl display="flex" sx={{flexDirection: "row"}}>
                            <TextField
                                error={verifyError}
                                helperText={verifyErrorMessage}
                                name="verify"
                                placeholder="verification code"
                                type="text"
                                id="verify"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                value={verify}
                                onChange={(e) => checkVerify(e.target.value)}
                                color={verifyError ? 'error' : 'primary'}
                            />
                            <Button variant="contained" disabled={verifyError} size="small">
                                Change Password
                            </Button>
                        </FormControl>
                    </CardContent>
                </Card>
                <Container />
            </SignInContainer>
        </MasterBox>
    )
}

export default PasswordRecoveryPage;

const styles = {
    cardImage: {
        variant: "elevation",
        color: '#421142',
    }
}

const MasterBox = style.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const SignInContainer = styled(Stack)(({ theme }) => ({
    position: 'absolute',
    height: 'calc((1 - var(--template-frame-height, 0)) * 60dvh)',
    minWidth: '32rem',
    display: 'flex',
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",
    padding: theme.spacing(3),
}));
