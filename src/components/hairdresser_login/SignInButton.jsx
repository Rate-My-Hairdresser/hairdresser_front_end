import {Button, FormLabel, TextField, Typography} from "@mui/material";

import styled from "styled-components"
import { colors } from "../../general/colors"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from "../../general/redux/selectors";

export default function HairDresserSignInBtn() {

    const navigate = useNavigate();

    const user = useSelector(selectUser)

    const handleLogin = () => {
        navigate("/login");
    }

    return (
        <Button
            type={"button"}
            fullWidth
            variant={"contained"}
            onClick={handleLogin}
        >
            {
                user.signedIn ?
                "Log Out" :
                "Log In"
            } 
        </Button>

    )

}