import { Avatar, Chip, Stack, Button, Rating } from "@mui/material"
import styled from "styled-components"
import { colors } from "../../general/colors"
import { MiniHeaderText, SubText } from "../../general/Text"


const SearchResult = ({name, priceLow, priceHigh, labels, images, ratings}) => {

    console.log(Object.keys(images))

    let ratingTotal = 0;

    for(let i = 0; i < ratings.length; i++) {
        ratingTotal += ratings[i].rating
    }
    const averageRating = ratingTotal / ratings.length

    return (
        <ResultBox>
            <Stack sx={stackStyle} direction="row" spacing={3}>
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
    margin: 1rem;
`

const ImageBox = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
`

export default SearchResult