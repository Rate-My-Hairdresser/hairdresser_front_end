import {Button, FormLabel, TextField} from "@mui/material";

import styled from "styled-components"
import { colors } from "../../general/colors"
import {useState} from "react";

const HairDresserLogin = () => {
    return (
        <Boxing>
            <TopSection>
                <Button
                    type={"button"}
                    fullWidth
                    variant={"contained"}
                    onClick={}
                    >
                    Log in
                </Button>
            </TopSection>
        </Boxing>
    )
}

export default function HairDresserLogin() {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [userName, setUserName] = React.useState("");

    return (
        <Boxing>
            <TopSection>
                <Button
                    type={"button"}
                    fullWidth
                    variant={"contained"}
                    onClick={}
                >
                    Log in
                </Button>
            </TopSection>
        </Boxing>
    )
}

const Boxing = styled.div`
    background-color: ${colors.offwhite};
    align-self: center;
    max-height: 200px;
    min-height: 100px;
    max-width: 200px;
    min-width: 100px;
    border-radius: 10px;
    padding: 1rem;
`

const TopSection = styled.div`
    width: 100%;
    height: 7rem;
    border-bottom: 1px solid ${colors.secondary};
    display: flex;
    justify-content: space-between;
`

const MoveToLogin = () => {

}