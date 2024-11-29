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
  "instagram": <InstagramIcon style={{ color: colors.dark_background }} />,
  "facebook": <FacebookIcon style={{ color: colors.dark_background }} />,
  "website": <LanguageIcon style={{ color: colors.dark_background }} />,
  "linkedin": <LinkedInIcon style={{ color: colors.dark_background }} />,
  "twitter": <XIcon style={{ color: colors.dark_background }} />,
  "x": <XIcon style={{ color: colors.dark_background }} />
}

const HairDresserSideBio = ({data}) => {

    const [saved, setSaved] = useState(false)

    const formattedBio = data.biography.split('\n').map((line, index) => (
        <SubText key={index} style={{ fontSize: '20px' }}>{line}</SubText> 
    ));

    return (
        <Container>
            <FavoriteBox>
                <IconButton  onClick={() => setSaved(!saved)}>
                    {
                        saved ? (
                            <BookmarkIcon style={{ ...styles.largeIcon, color: colors.dark_background }} />
                        ) : (
                            <BookmarkBorderIcon style={{ ...styles.largeIcon, color: colors.dark_background }} />
                        )
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
    border-bottom: 1px solid ${colors.dark_background};
    padding-bottom: 1rem;
    font-family: 'DarkerGrotesque';
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-wrap: break-word;
    border-bottom: 1px solid ${colors.dark_background};
    font-family: 'DarkerGrotesque';
`

const Container = styled.div`
    background-color: ${colors.background};
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Increased shadow size */
    font-family: 'DarkerGrotesque';
`
