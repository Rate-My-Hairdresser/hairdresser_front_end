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
        <MasterBox>
                <SignUpContainer direction="column" justifyContent="space-between">
                    <Typography
                        component="h1"
                        variant="h7"
                        marginTop="3rem"
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
                </SignUpContainer>
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
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
}));