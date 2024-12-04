import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Container,
    Stack,
    TextField,
    Typography
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import style from "styled-components";
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../general/redux/actions.js";
import { userType } from "../../general/redux/actions.js";
import { colors } from "../../general/colors";

import { PreviousPageButton } from "../../components/navigation_drawer/previous/index.jsx";

// Originated from: https://github.com/bryc/code
// It is public domain. We will force seed to be 42.
const cyrb53 = (str, seed = 42) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

export default function HairDresserLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState("");

    //const { token, setToken } = useToken();

    useEffect(() => {
        setLoginError(false);
        setLoginErrorMessage("");
    }, [email, password]);

    const nav = useNavigate();
    const dispatch = useDispatch();
    const navRegister = () => nav("/auth/register");
    const navPrev = () => nav("/");
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleSubmit = (event) => {
        console.log("SEND");
        //this is where error checking would be added

        if (email.length === 0 || password.length === 0) {
            setLoginErrorMessage("Email or password is missing");
            setLoginError(true);
            event.preventDefault();
            return;
        } else if (!re.test(email)) {
            setLoginErrorMessage("Email need to be an email");
            setLoginError(true);
            event.preventDefault();
            return;
        } else {
            let hash_id = cyrb53(email);
            let hash_pw = cyrb53(password);
            dispatch(signIn(hash_id, hash_pw, userType.STANDARD));
            let id = sessionStorage.getItem("token");

            if (id === null) {
                console.log("FAIL");
                setLoginError(true);
                setLoginErrorMessage("Incorrect account information");
                event.preventDefault();
                return;
            } else {
                // const data = new FormData(event.currentTarget);
                navPrev();
            }
        }
    }

    return (
        <MasterBox>
            <SignInContainer margin={"dense"}>
                <Container />
                <Typography
                    component="h1"
                    variant="h7"
                    sx={{ width: '100%', fontSize: 'clamp(3.5rem, 10vw, 2.15rem)', fontFamily: 'DarkerGrotesque'}}
                    paddingLeft={0}
                    paddingTop={0}
                    paddingBottom={6}
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
                        <TextField
                            label="email"
                            error={loginError}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            autoComplete="email"
                            autoFocus
                            fullWidth
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            color={loginError ? 'error' : 'primary'}
                            sx={{ ariaLabel: 'email' }}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            label="password"
                            error={loginError}
                            helperText={loginErrorMessage}
                            name="password"
                            placeholder="••••••"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            autoFocus
                            fullWidth
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            color={loginError ? 'error' : 'primary'}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Link
                                component="button"
                                type="button"
                                variant="body2"
                                sx={{ alignSelf: 'baseline' }}
                                to={"/auth/password_reset"}
                                style = {styles.forgotPassword}
                                
                            >
                                Forgot your password?
                            </Link>
                        </Box>
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" disabled={loginError}/>}
                        margin="dense"
                        label={"Remember Me"}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={styles.signInButton} 
                    >
                        Sign in
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        color={"secondary"}
                        variant="contained"
                        onClick={navRegister}
                        style={styles.registerButton} 
                    >
                        Register for new account
                    </Button>
                </Box>
                <PreviousPageButton />
            </SignInContainer>
        </MasterBox>
    )
}

const MasterBox = style.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.background};
   
`

const SignInContainer = styled(Stack)(({ theme }) => ({
    position: 'absolute',
    height: '550px',
    width: '33%',
    minWidth: '32rem',
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: theme.spacing(3),
    backgroundColor:  "#FFFFFF",
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", 
}));


const styles = {
    signInButton: {
        backgroundColor: colors.dark_background,
        color: colors.text.primary,    
    },

    registerButton: {
        backgroundColor: "#B7B1F8",
        color: colors.text.primary      
    },

    forgotPassword: {
        color: "#1565c0"
    }
}