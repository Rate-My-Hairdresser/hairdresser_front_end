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
                <Avatar sx={{ width: 110, height: 110, backgroundColor: colors.dark_background }} />
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
     <Chip 
     label={value} 
     key={index} 
     sx={{ 
         backgroundColor: colors.dark_background, 
         marginBottom: '1rem', 
         marginRight: '0.5rem', 
     }} 
 />
    ))}
                    </Grid2>
                </Grid2>
            </BottomSection>
        </Container>
    )
}

export default HairdresserSummary;



const Container = styled.div`
    background-color: ${colors.background};
    border-radius: 15px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Increased shadow size */
    font-family: 'DarkerGrotesque';
`;

const TopSection = styled.div`
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid ${colors.dark_background};
    display: flex;
    justify-content: space-between;
    font-family: 'DarkerGrotesque';
`;

const BottomSection = styled.div`
    width: 100%;
    height: 18rem;
    display: flex;
    justify-content: space-between;
    font-family: 'DarkerGrotesque';
`;

const RatingContainer = styled.div`
    margin-top: auto;
    font-family: 'DarkerGrotesque';
`;

const BackContainer = styled.div`
    font-family: 'DarkerGrotesque';
`;

const AvatarBox = styled.div`
    margin-top: 0.5rem;
    margin-left: -20%;
    font-family: 'DarkerGrotesque';
`;

const InfoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'DarkerGrotesque';
`;

const NewChips = styled(Chip)(({}) => ({
    marginBottom: '1rem',
    marginRight: '0.5rem',
    fontFamily: 'DarkerGrotesque',
    backgroundColor: colors.black,  // Apply the same background color
}));