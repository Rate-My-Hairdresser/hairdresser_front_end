import { Avatar, IconButton } from "@mui/material";
import { Rating } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { colors } from "../../general/colors"
import styled from "styled-components"

const HairdresserSummary = () => {
    return (
        <Container>
            <TopSection>
                <BackContainer>
                    <IconButton>
                        <ArrowBackIosNewIcon/>
                    </IconButton>
                </BackContainer>
                <AvatarBox>
                    <Avatar sx={{width: 110, height: 110}}/>
                </AvatarBox>
                <HairdresserText>
                    Karen Blephy
                </HairdresserText>
                <RatingContainer>
                    <Rating name="read-only" value={4} readOnly />
                </RatingContainer>
            </TopSection>
        </Container>
    )
}

export default HairdresserSummary;

const Container = styled.div`
    background-color: ${colors.offwhite};
    height: 300px;
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

const RatingContainer = styled.div`
    margin-top: auto;
    
`

const BackContainer = styled.div`

`

const HairdresserText = styled.text`
    margin-top: auto;
`

const AvatarBox = styled.div`
    margin-top: 3.5rem;
    margin-left: -20%;
`