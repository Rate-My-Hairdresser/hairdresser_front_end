import styled from "styled-components";
import { colors } from "../../../general/colors";
import { ImageList, ImageListItem } from "@mui/material";
import data from "../data.json"

const HairdresserGallery = () => {
    
    return (
        <Container>
            <HeaderText>Gallery</HeaderText>
            <ImageList sx={{height: "30rem"}} cols={3}>
                {
                    Object.entries(data.gallery).map(([key, value], index) => (
                        <ImageListItem key={index}>
                            <img
                                src={`${value}`}
                                alt={key}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </Container>
    )
}

export default HairdresserGallery;

const Container = styled.div`
    background-color: ${colors.offwhite};
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

const HeaderText = styled.h2`
    margin: 0 0 1rem 0;
    color: ${colors.primary};
    text-align: center;
`