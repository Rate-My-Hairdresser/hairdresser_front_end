import React, { useState } from 'react'
import styled from "styled-components"
import { colors } from "../../../general/colors"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IconButton } from "@mui/material";
import data from "../data.json"

const HairDresserSideBio = () => {

    const [saved, setSaved] = useState(false)

    const formattedBio = data.biography.split('\n').map((line, index) => (
        <SubText key={index}>{line}</SubText>
    ));

    return (
        <Container>
            <FavoriteBox>
                <IconButton  onClick={() => setSaved(!saved)}>
                    {
                        saved ?
                        (<BookmarkIcon style={styles.largeIcon}/>)
                        :
                        (<BookmarkBorderIcon style={styles.largeIcon}/>)
                    }
                    
                </IconButton>
            </FavoriteBox>
            <TextBox>
                <HeaderText>
                    Biography
                </HeaderText>
                <SubText>
                    {formattedBio}
                </SubText>
                
            </TextBox>
            <TextBox style={{borderBottom: 0}}>
                <HeaderText>
                    Links
                </HeaderText>
                <SubText>
                    {Object.entries(data.links).map(([key, value]) => (
                        <SubText>{key}: <a href={value} target="_blank" rel="noreferrer">{value}</a></SubText>
                    ))}
                </SubText>
            </TextBox>
        </Container>
    )
}

export default HairDresserSideBio

const styles = {
    largeIcon: {
        fontSize: '50px',
    },
}

const FavoriteBox = styled.div`
    text-align: center;
    border-bottom: 1px solid ${colors.secondary};
    padding-bottom: 1rem;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-wrap: break-word;
    border-bottom: 1px solid ${colors.secondary};
`

const SubText = styled.p`
    overflow-wrap: break-word;
`

const HeaderText = styled.h2`
    margin: 0 0 1rem 0;
    color: ${colors.primary};
    text-align: center;
`

const Container = styled.div`
    background-color: ${colors.offwhite};
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`