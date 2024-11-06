import {Button, FormLabel, TextField, Typography} from "@mui/material";

import styled from "styled-components"
import { colors } from "../../general/colors"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function HairDresserSignInBtn() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("User1234");

    const navigate = useNavigate();

    const handleLogin = () => {
        if (loggedIn) {
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
        }
        navigate("/login");
    }

    if (loggedIn) {
        return (
            <Boxing>
                <TopSection>
                    <Button
                        type={"button"}
                        fullWidth
                        variant={"contained"}
                        onClick={handleLogin}
                    >
                        Log out
                    </Button>
                </TopSection>
                <Typography
                    component="h1"
                    variant="h2"
                    sx={{ width: '110%', fontSize: 'clamp(0.9rem, 3vw, 0.9rem)' }}
                >
                    Welcome, {userName}!
                </Typography>
            </Boxing>
        )
    } else {
        return (
            <Boxing>
                <TopSection>
                    <Button
                        type={"button"}
                        fullWidth
                        variant={"contained"}
                        onClick={handleLogin}
                    >
                        Log in
                    </Button>
                </TopSection>
            </Boxing>
        )
    }

}

const Boxing = styled.div`
    background-color: ${colors.offwhite};
    align-self: center;
    max-height: 6rem;
    min-height: 4rem;
    max-width: 8rem;
    min-width: 8rem;
    border-radius: 10px;
    padding: 0.5rem;
`

const TopSection = styled.div`
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid ${colors.secondary};
    display: flex;
    justify-content: space-between;
`

const MoveToLogin = () => {

}