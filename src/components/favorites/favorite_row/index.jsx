import { Avatar, Chip, Stack, Button, Rating } from "@mui/material"
import styled from "styled-components"
import { colors } from "../../../general/colors"
import { MiniHeaderText, SubText } from "../../../general/Text"
import { useNavigate } from "react-router"
import RemoveIconbutton from "../removeicon"


const SearchResultFavorites = ({name, priceLow, priceHigh, labels, images, ratings, onMouseEnter, onMouseLeave, hover, index}) => {

    let ratingTotal = 0;

    const navigate = useNavigate();

    for(let i = 0; i < ratings.length; i++) {
        ratingTotal += ratings[i].rating
    }
    const averageRating = ratingTotal / ratings.length

    return (
        <ResultBox onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={hover? {  boxShadow: `0.3em 0.3em 1em ${colors.secondary}`} : {}}>
            
            <Stack sx={stackStyle} direction="row" spacing={3}>
            <div>
                <RemoveIconbutton index={index} />
            </div>
                {
                    Object.keys(images).length > 0 ? <ImageBox src={Object.values(images)[0]}/> : ""
                }
                {
                    Object.keys(images).length > 1 ? <ImageBox src={Object.values(images)[1]}/> : ""
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
                        onClick={() => navigate("/hair_page")}
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
    margin: 0.5rem;
    border-radius: 8px;
    
    
`

const ImageBox = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
`

export default SearchResultFavorites