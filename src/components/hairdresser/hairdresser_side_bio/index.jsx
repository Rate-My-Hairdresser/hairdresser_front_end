import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from "../../../general/redux/selectors";
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
        "instagram": <InstagramIcon style={{ color: colors.dark_background, fontSize: '40px' }} />,
"facebook": <FacebookIcon style={{ color: colors.dark_background, fontSize: '40px' }} />,
  "website": <LanguageIcon style={{ color: colors.dark_background, fontSize: '40px' }} />,
  "linkedin": <LinkedInIcon style={{ color: colors.dark_background, fontSize: '40px' }} />,
  "twitter": <XIcon style={{ color: colors.dark_background, fontSize: '40px' }} />,
  "x": <XIcon style={{ color: colors.dark_background, fontSize: '40px' }} />
}

const HairDresserSideBio = ({data, browseId}) => {

    const [saved, setSaved] = useState(false)
    const user = useSelector(selectUser)

    useEffect(() => {
        if (user.signedIn) {
            var favorites = JSON.parse('[' + sessionStorage.getItem("favorites") + ']');
            if (favorites.find((e) => e === browseId) !== undefined) {
                setSaved(true);
            }
        }
    }, [browseId, user.signedIn])

    const addFavorite = () => {
        var current = JSON.parse( '[' + sessionStorage.getItem("favorites") + ']');
        if (saved) {
            current = current.filter((e) => e !== browseId);
        } else {
            current.push(browseId);
        }
        sessionStorage.setItem("favorites", current);
        setSaved(!saved);
    }

    const formattedBio = data.biography.split('\n').map((line, index) => (
        <SubText key={index} style={{ fontSize: '20px' }}>{line}</SubText> 
    ));

    return (
        <Container>
            <FavoriteBox>
                <IconButton  onClick={addFavorite} disabled={!user.signedIn}>
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
                        <Link to={value} target="_blank" rel="noopener noreferrer">
                            <IconButton key={key} style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                                {logos[key]}
                            </IconButton>
                        </Link>
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); 
    font-family: 'DarkerGrotesque';
`
