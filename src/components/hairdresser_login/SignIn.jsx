import { FormLabel, TextField } from "@mui/material";

import styled from "styled-components"
import { colors } from "../../general/colors"

const HairDresserLogin = () => {
    return (
        <Boxing>
            <TopSection>
                <TextField
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={'primary'}
                    sx={{ ariaLabel: 'email' }}
                />
            </TopSection>
        </Boxing>
    )
}

export default HairDresserLogin;

const Boxing = styled.div`
    background-color: ${colors.offwhite};
    align-self: center;
    max-height: 450px;
    min-height: 200px;
    max-width: 400px;
    min-width: 300px;
    border-radius: 15px;
    padding: 1rem;
`

const TopSection = styled.div`
    width: 100%;
    height: 7rem;
    border-bottom: 1px solid ${colors.secondary};
    display: flex;
    justify-content: space-between;
`