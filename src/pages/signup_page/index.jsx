import { Grid2, Stack } from "@mui/material";
import HairDresserLogin from "../../components/hairdresser_login/SignIn";
import {useCallback, useState} from "react";
import HairDresserSignUp from "../../components/hairdresser_login/SignUp";

const HairdresserSignUpPage = () => {
    return (
        <Grid2 container spacing={3} margin={3}>
            <Grid2 size={9}>
                <Stack direction="column" spacing={"1rem"}>
                    <HairDresserSignUp/>
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default HairdresserLoginPage;