import { Avatar, Grid2, IconButton, Tooltip, Button, Chip, Stack } from "@mui/material";
import { Rating } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { colors } from "../../../general/colors";
import { SubText, HeaderText } from "../../../general/Text";
import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';
import MapComp, { geocodeAddress } from "../../map/MapComp";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import EditableContainer from "./editable_container";
import EditableMultiContainer from "./editable_multi";

const HairdresserSummary = ({ 
    data, 
    reviewNumber, 
    state, 
    edit = false, 
    salon = "", 
    setSalon = () => {}, 
    salonCheck = () => {},
    location = "",
    setLocation = () => {},
    locationCheck = () => {},
    coordinates = {},
    setData = () => {},
  }) => {

  const [salonError, setSalonError] = useState(false)
  const [locationError, setLocationError] = useState(false)

  const salonFunc = (e, setNotPass) => {
    if(salon !== "") {
      setSalonError(false)
      salonCheck()
      setNotPass(false)
    } else {
      setSalonError(true)
    }
  }

  const locationFunc = (e, setNotPass) => {
    if(location !== "") {
      //check if the address is valid
      geocodeAddress(location)
        .then((location) => {
          setLocationError(false)
          locationCheck(location)
        })
        .catch((error) => {
          console.error('Geocoding error')
          setLocationError(true)
        })
      locationCheck()
      setNotPass(false)
    } else {
      setLocationError(true)
    }
  }

  const setContactData = (e, newConttact, setNotPass) => {
    setData(prevData => ({
      ...prevData,
      salon: {
          ...prevData.salon,
          contact: newConttact
      }
    }));
    setNotPass(false)
  }

  // Calculate the total number of reviews
  const numberOfReviews = reviewNumber;

  const navigate = useNavigate();

  return (
    <Container>
      <TopSection>
        <BackContainer>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </BackContainer>
        <AvatarBox>
          <Avatar sx={{ width: 110, height: 110, backgroundColor: colors.dark_background }} />
        </AvatarBox>
        <HeaderText style={{ marginTop: "auto" }}>
          {data.name}
        </HeaderText>
        <RatingContainer>
          <Tooltip title={edit ? "" : "Jump to ratings"} placement="top">
            <HashLink to={edit ? "" : "/hair_page#review"} state={state} smooth>
              <Button>
                <Stack direction="row" alignItems="center" spacing={0.5}> {/* Reduce spacing to bring closer */}
                  <Rating 
                    name="read-only" 
                    value={numberOfReviews > 0 ? 4 : 0}
                    readOnly 
                  />
                  <SubText 
                    style={{ 
                      fontSize: '16px', 
                      lineHeight: '1.5', 
                      marginLeft: '-2px'  /* Move the number slightly left */
                    }}
                  >
                    ({data.reviews.length})
                  </SubText>
                </Stack>
              </Button>
            </HashLink>
          </Tooltip>
        </RatingContainer>
      </TopSection>
      <BottomSection>
        <Grid2 container sx={{ height: "100%", width: "100%", padding: 1 }} spacing={1}>
          <Grid2 size={3}>
            <InfoContainer>
              <EditableContainer editable={edit} cid={"Salon"} clabel={"Salon name"} cvalue={salon} content={data.salon.name} setContent={setSalon} contentError={salonError} contentFunc={salonFunc} />
              <EditableContainer editable={edit} cid={"Location"} clabel={"Location"} cvalue={location} content={data.salon.location} setContent={setLocation} contentError={locationError} contentFunc={locationFunc} />
              <EditableMultiContainer editable={edit} cid={"Contact Info"} content={data.salon.contact} contentFunc={setContactData} />
            </InfoContainer>
          </Grid2>
          <Grid2 size={7} rad>
            {edit ?
              <MapComp zoomLocation={JSON.stringify(coordinates) !== "{}" ? coordinates : undefined} markers={JSON.stringify(coordinates) !== "{}" ? [coordinates] : []}/>
            :
              <MapComp zoomLocation={data.salon.coordinates} markers={[data.salon.coordinates]} />
            }
          </Grid2>

          <Grid2 size={2}>
            {data.filters.map((value, index) => (
              <Chip 
                label={value} 
                key={index} 
                sx={{ 
                  backgroundColor: colors.dark_background, 
                  marginBottom: '1rem', 
                  marginRight: '0.5rem' 
                }} 
              />
            ))}
          </Grid2>
        </Grid2>
      </BottomSection>
    </Container>
  );
}

export default HairdresserSummary;

const Container = styled.div`
  background-color: ${colors.background};
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
