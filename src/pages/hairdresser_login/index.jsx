import { Grid2, Stack } from "@mui/material";
import HairDresserLogin from "../../components/hairdresser_login/SignIn";
import {useCallback, useState} from "react";
import HairDresserSignUp from "../../components/hairdresser_login/SignUp";

const HairdresserLoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSwitch = () => {
        if (isSignUp) {
            return setIsSignUp(false);
        } else {
            return setIsSignUp(true);
        }
    }

    if (isSignUp) {
        return (
            <Grid2 container spacing={3} margin={3}>
                <Grid2 size={9}>
                    <Stack direction="column" spacing={"1rem"}>
                        <HairDresserSignUp pass={setIsSignUp}/>
                    </Stack>
                </Grid2>
            </Grid2>
        );
    } else {
        return (
            <Grid2 container spacing={3} margin={3}>
                <Grid2 size={9}>
                    <Stack direction="column" spacing={"1rem"}>
                        <HairDresserLogin pass={setIsSignUp}/>
                    </Stack>
                </Grid2>
            </Grid2>
        );
    }

}

export default HairdresserLoginPage;