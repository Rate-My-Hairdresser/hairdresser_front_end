import { Avatar, Grid2, IconButton } from "@mui/material";
import { Rating } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { colors } from "../../../general/colors"
import styled from "styled-components"
import MapComp from "../../map/MapComp";
import data from "../data.json";

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
                    {data.name}
                </HairdresserText>
                <RatingContainer>
                    <Rating name="read-only" value={4} readOnly />
                </RatingContainer>
            </TopSection>
            <BottomSection>
                <Grid2 container sx={{height: "100%", width: "100%", padding: 1}}>
                    <Grid2 size={6}>
                        <InfoContainer>
                            <><MiniHeaderText>Salon: </MiniHeaderText><SubText>{data.salon.name}</SubText></>
                            <><MiniHeaderText>Location: </MiniHeaderText><SubText>{data.salon.location}</SubText></>
                            <><MiniHeaderText>Contact Info: </MiniHeaderText></>
                            {
                                Object.entries(data.salon.contact).map(([key, value]) => (
                                    <SubText key={key}>&nbsp; {key}: {value}</SubText>
                                ))
                            }
                        </InfoContainer>
                    </Grid2>
                    <Grid2 size={6}>
                        <MapComp zoomLocation={data.salon.coordinates} markers={[data.salon.coordinates]}/>
                    </Grid2>
                </Grid2>
            </BottomSection>
        </Container>
    )
}

export default HairdresserSummary;

const Container = styled.div`
    background-color: ${colors.offwhite};
    height: 25rem;
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
const BottomSection = styled.div`
    width: 100%;
    height: 18rem;
    display: flex;
    justify-content: space-between;
`

const RatingContainer = styled.div`
    margin-top: auto;
`

const BackContainer = styled.div``

const HairdresserText = styled.p`
    margin-top: auto;
`

const AvatarBox = styled.div`
    margin-top: 3.5rem;
    margin-left: -20%;
`

const InfoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SubText = styled.p`
    color: ${colors.text.secondary};
    font-size: 14px;
    margin: 0
`

const MiniHeaderText = styled.p`
    color: ${colors.text.primary};
    font-size: 16px;
    margin: 0;
`