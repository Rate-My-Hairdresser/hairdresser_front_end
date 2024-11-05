import { Avatar, Chip, Stack } from "@mui/material"
import styled from "styled-components"
import { colors } from "../../general/colors"
import { MiniHeaderText, SubText } from "../../general/Text"


const SearchResult = ({name, priceLow, priceHigh, labels}) => {



    const label = labels[0]

    return (
        <ResultBox>
            <Stack sx={stackStyle} direction="row" spacing={3}>
                <Avatar />
                <MiniHeaderText>{name}</MiniHeaderText>
                <Stack sx={stackStyle} spacing={0.6} direction="row"><MiniHeaderText>Price:</MiniHeaderText><SubText>${priceLow}-${priceHigh}</SubText></Stack>
                <Chip label={label}/>
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

export default SearchResult