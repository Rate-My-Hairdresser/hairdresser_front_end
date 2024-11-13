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
import style from "styled-components";
import { styled } from '@mui/material/styles';
import {useState} from "react";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../general/redux/actions.js";
import { userType } from "../../general/redux/actions.js";
import userData from "../../data/userList.json"

export default function HairDresserLogin() {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState("");
    const [open, setOpen] = useState(false);

    const nav = useNavigate();
    const dispatch = useDispatch();
    const navRegister = () => nav("/register");

    const handleLogin = () => {
        
        
        //this is where error checking would be added

        //check if user exists
        const result = getUser(email, password);

        if(result.accept === true) {
            console.log("YYYYYYYYYYYYYYYYYYYYYYAAAAAAAAAAAAAAAAAAAAAAA")
            dispatch(signIn(email, result.userId, result.userType)) //sign-in user
            if(result.userType === userType.STANDARD) { //regular users go to homepage
                nav("/");
            } else if(result.userType === userType.STYLIST) {
                //go to the stylists page
            }
            
        } else {
            console.log("that user does not exist")
        }
    }

    const getUser = (email, password) => {
        for(let [key, value] of Object.entries(userData)) {
            if(value.email === email) {
                if(value.password === password) {
                    return {
                        accept: true,
                        email: email,
                        userId: value.userId,
                        userType: value.userType
                    }
                }
            }
        }
        return {accept: false}
    }

    const handleSubmit = (event) => {
        if (loginError) {
            event.preventDefault();
            return;
        }
        const data = new FormData(event.currentTarget);
    }

    const funcPrototype = () => {
        return true;
    }

    return (
        <MasterBox>
            <SignInContainer>
                <Typography
                    component="h1"
                    variant="h7"
                    sx={{ width: '100%', fontSize: 'clamp(3rem, 10vw, 2.15rem)' }}
                    paddingLeft={4}
                    paddingTop={6}
                >
                    Sign in
                </Typography>
                <Box
                    component="form"
                    // onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 3,
                    }}
                >
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            color={loginError ? 'error' : 'primary'}
                            sx={{ ariaLabel: 'email' }}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            color={loginError ? 'error' : 'primary'}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Link
                                component="button"
                                type="button"
                                variant="body2"
                                sx={{ alignSelf: 'baseline' }}
                            >
                                Forgot your password?
                            </Link>
                        </Box>
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleLogin}
                    >
                        Sign in
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        color={"secondary"}
                        variant="contained"
                        onClick={handleLogin}//navRegister
                    >
                        Register for new account
                    </Button>
                </Box>
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
`

const SignInContainer = styled(Stack)(({ theme }) => ({
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