import React, { useState } from 'react'
import styled from "styled-components"
import { colors } from "../../../general/colors"
import { HeaderText, SubText } from '../../../general/Text';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { IconButton, Stack } from "@mui/material";
import { Link } from 'react-router-dom';


const logos = {
    "instagram": <InstagramIcon />,
    "facebook": <FacebookIcon/>,
    "website": <LanguageIcon/>,
    "linkedin": <LinkedInIcon/>,
    "twitter": <XIcon/>,
    "x": <XIcon/>
}

const HairDresserSideBio = ({data}) => {

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
                <Stack direction="row">
                    {Object.entries(data.links).map(([key, value]) => (
                        <IconButton key={key}>
                            <Link to={value} target="_blank" rel="noopener noreferrer" style={{height: "24px"}}>
                                {logos[key]}
                            </Link>
                        </IconButton>
                    ))}
                </Stack>
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

const Container = styled.div`
    background-color: ${colors.offwhite};
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`