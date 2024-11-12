import { Avatar, Grid2, IconButton, Tooltip, Button, Chip } from "@mui/material";
import { Rating } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { colors } from "../../../general/colors"
import { SubText, MiniHeaderText, HeaderText } from "../../../general/Text";
import styled from "styled-components"
import { HashLink } from 'react-router-hash-link';
import MapComp from "../../map/MapComp";

const HairdresserSummary = ({data, reviewNumber}) => {

    // const data = hairData[1];

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
                <HeaderText style={{marginTop: "auto"}}>
                    {data.name}
                </HeaderText>
                <RatingContainer>
                    <Tooltip title="Jump to ratings" placement="top">
                        <HashLink to="#review" smooth>
                            <Button>
                                <Rating name="read-only" value={reviewNumber || 0} readOnly />
                            </Button>
                        </HashLink>
                    </Tooltip>
                </RatingContainer>
            </TopSection>
            <BottomSection>
                <Grid2 container sx={{height: "100%", width: "100%", padding: 1}} spacing={1}>
                    <Grid2 size={3}>
                        <InfoContainer>
                            <MiniHeaderText>Salon: </MiniHeaderText>
                            <SubText>&nbsp; {data.salon.name}</SubText>
                            <MiniHeaderText>Location: </MiniHeaderText>
                            <SubText>&nbsp; {data.salon.location}</SubText>
                            <MiniHeaderText>Contact Info: </MiniHeaderText>
                            {
                                Object.entries(data.salon.contact).map(([key, value]) => (
                                    <SubText key={key}>&nbsp; {key}: {value}</SubText>
                                ))
                            }
                        </InfoContainer>
                    </Grid2>
                    <Grid2 size={7}>
                        <MapComp zoomLocation={data.salon.coordinates} markers={[data.salon.coordinates]}/>
                    </Grid2>
                    <Grid2 size={2}>
                        {data.filters.map((value, index) => (
                            <NewChips label={value} key={index}/>
                        ))}
                    </Grid2>
                </Grid2>
            </BottomSection>
        </Container>
    )
}

export default HairdresserSummary;

const NewChips = styled(Chip)(({}) => ({
    marginBottom: '1rem',
    marginRight: '0.5rem'
}))

const Container = styled.div`
    background-color: ${colors.offwhite};
    border-radius: 15px;
    padding: 1rem;
`

const TopSection = styled.div`
    width: 100%;
    height: 4rem;
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

const AvatarBox = styled.div`
    margin-top: 0.5rem;
    margin-left: -20%;
`

const InfoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`