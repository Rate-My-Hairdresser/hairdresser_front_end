import { Avatar, Chip, Stack, Button, Rating } from "@mui/material"
import styled from "styled-components"
import { colors } from "../../general/colors"
import { MiniHeaderText, SubText } from "../../general/Text"
import { useNavigate } from "react-router"
import { useWindowDimensions } from "../../general/helpers"


const SearchResult = ({name, priceLow, priceHigh, labels, images, ratings, onMouseEnter, onMouseLeave, hover, index}) => {

    let ratingTotal = 0;
    const { width } = useWindowDimensions();

    const navigate = useNavigate();

    for(let i = 0; i < ratings.length; i++) {
        ratingTotal += ratings[i].rating
    }
    const averageRating = ratingTotal / ratings.length

    const preloadStylist = () => {
        navigate("/hair_page", { state: { browseId: index } });
    }

    // Determine if we should show images based on available width
    // Hide images on smaller screens to prevent content from being cut off
    const shouldShowImages = width > 1200; // Show images only on larger screens
    const maxImages = width > 1400 ? 2 : 1; // Show max 1 image on medium screens, 2 on large screens

    return (
        <ResultBox onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={hover? {  boxShadow: `0.3em 0.3em 1em ${colors.secondary}`} : {}}>
            <Stack sx={stackStyle} direction="row" spacing={3}>
                {
                    shouldShowImages && Object.keys(images).length > 0 ? <ImageBox src={Object.values(images)[0]}/> : ""
                }
                {
                    shouldShowImages && maxImages > 1 && Object.keys(images).length > 1 ? <ImageBox src={Object.values(images)[1]}/> : ""
                }
                
                <Stack direction="column" gap={1} sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <Stack direction="row" gap={1} sx={{alignItems: 'center'}}>
                        <Avatar sx={{width: 50, height: 50, backgroundColor: colors.secondaryBackground}}/>
                        <Stack direction="column">
                            <MiniHeaderText>{name}</MiniHeaderText>
                            <Stack sx={stackStyle} spacing={0.6} direction="row">
                                <MiniHeaderText style={{fontSize: "14px"}}>
                                    Price:
                                </MiniHeaderText>
                                <SubText>
                                    ${priceLow}-${priceHigh}
                                </SubText>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack direction="row">
                        <Rating value={averageRating} readOnly/>
                        ({ratings.length})
                    </Stack>
                </Stack>
                <Stack direction="column" gap={1}>
                {
                    labels.length > 0 ? <Chip label={labels[0]} sx={{backgroundColor: colors.secondaryBackground}}/> : ""
                }
                {
                    labels.length > 1 ? <Chip label={labels[1]} sx={{backgroundColor: colors.secondaryBackground}}/> : ""
                }
                </Stack>
                
                <div style={{marginLeft: 'auto'}}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: colors.dark_background,
                            color: colors.text.primary,
                        }}
                        onClick={preloadStylist}
                    >
                        VISIT PAGE
                    </Button>
                </div>
            </Stack>
        </ResultBox>
    )

}

const stackStyle = {
    display: "flex",
    alignItems: "center"
}

const ResultBox = styled.div`
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 8px;
`

const ImageBox = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
`

export default SearchResult