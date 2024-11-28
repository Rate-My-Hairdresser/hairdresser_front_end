
import style from "styled-components";
import { styled } from '@mui/material/styles';
import { Card, Typography, Container, Stack, CardContent
    , TextField, FormControl, Button, Box, FormLabel, Divider
 } from "@mui/material";
import { useState } from "react";
import { PreviousPageButton } from "../../components/navigation_drawer/previous";

const PasswordRecoveryPage = () => {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
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
                        <Typography inline component="h2" variant="h1" sx={{ width: '100%', fontSize: 'clamp(1rem, 10vw, 0.15rem)', wordBreak: "break-word" }}>
                            We will send you email with link to reset your password.
                        </Typography>
                        <Typography inline>
                            The link will be valid for 30 minutes.
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
                    </CardContent>
                </Card>
                <PreviousPageButton />
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
    height: 'calc((1 - var(--template-frame-height, 0)) * 30dvh)',
    minWidth: '32rem',
    display: 'flex',
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",
    padding: theme.spacing(3),
}));
