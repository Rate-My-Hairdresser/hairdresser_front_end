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
import { IconButton, MenuItem, Select, Stack, TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

const logos = {
        "instagram": <InstagramIcon style={{ color: colors.dark_background, fontSize: '40px' }} />,
"facebook": <FacebookIcon style={{ color: colors.dark_background, fontSize: '40px' }} />,
  "website": <LanguageIcon style={{ color: colors.dark_background, fontSize: '40px' }} />,
  "linkedin": <LinkedInIcon style={{ color: colors.dark_background, fontSize: '40px' }} />,
  "twitter": <XIcon style={{ color: colors.dark_background, fontSize: '40px' }} />
}

const EditableBios = ( {editable, formattedBio, rawBio, setTempBios} ) => {
    const [isEditing, setIsEditing] = useState(false)
    const [x, setX] = useState(rawBio)

    if (isEditing) {
        return (
            <TextBox>
                <Stack direction={"row"} justifyContent={"center"}>
                    <HeaderText>
                        Biography
                    </HeaderText>
                    <IconButton onClick={(e) => {setIsEditing(false)
                        setTempBios(x)
                    }} >
                        <CheckIcon />
                    </IconButton>
                </Stack>
                <TextField id="stylist-glossary" label="Glossary" multiline={true} rows={25} defaultValue={rawBio} variant='filled'
                onChange={(e) => setX(e.target.value)} />
            </TextBox>
        )
    } else {
        return (
            <TextBox>
                <Stack direction={"row"} justifyContent={"center"}>
                    <HeaderText>
                        Biography
                    </HeaderText>
                    {editable ? <IconButton onClick={(e) => {setIsEditing(true)}}   
                        ><EditIcon />
                        </IconButton> : null}
                </Stack>
                <SubText>
                    {formattedBio}
                </SubText>
            </TextBox>
        )
    }
}

const EditableLinks = ( {editable, linkdata, setLinkdata} ) => {
    const [isEditing, setIsEditing] = useState(false)
    const [indexing, setIndexing] = useState("website");
    const [linkValue, setLinkValue] = useState('');

    useEffect(() => {
        if (linkdata[indexing] !== undefined) {
            setLinkValue(linkdata[indexing])
        } else {
            setLinkValue("")
        }
    }, [indexing, linkdata])

    const editLink = (e, key) => {
        setLinkValue(e.target.value)
        if (e.target.value.length > 0) {
            temp[key] = e.target.value;
        } else {
            delete temp[key];
        }
        setLinkdata(temp)
    }

    if (isEditing) {
        var temp = linkdata

        return (
            <TextBox style={{borderBottom: 0}}>
                <Stack direction={"row"} justifyContent={"center"}>
                    <HeaderText>
                        Links
                    </HeaderText>
                    <IconButton onClick={(e) => {setIsEditing(false)}} >
                        <CheckIcon />
                    </IconButton>
                </Stack>
                <Stack direction="row">
                    <Select
                        labelId='edit-link-option-label'
                        id='edit-link-options'
                        value={indexing}
                        label=""
                        onChange={(e) => setIndexing(e.target.value)}
                        variant='standard'
                    >
                        {Object.entries(logos).map(([key, value]) => (
                            <MenuItem value={key}>
                                {value}
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField id="link-content" 
                        label="Address"
                        variant="outlined"
                        value={linkValue}
                        onChange={(e) => editLink(e, indexing)}
                    />
                </Stack>
            </TextBox>
        )
    } else {
        return (
            <TextBox style={{borderBottom: 0}}>
                <Stack direction={"row"} justifyContent={"center"}>
                    <HeaderText>
                        Links
                    </HeaderText>
                    {editable ? <IconButton onClick={(e) => {setIsEditing(true)}}   
                        ><EditIcon />
                        </IconButton> : null}
                </Stack>
                <Stack direction="row">
                    {Object.entries(linkdata).map(([key, value]) => (
                        <Link to={value} target="_blank" rel="noopener noreferrer">
                            <IconButton key={key} style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                                {logos[key]}
                            </IconButton>
                        </Link>
                    ))}
                </Stack>
            </TextBox>
        )
    }
}

const HairDresserSideBio = ({edit, data, browseId}) => {

    const [saved, setSaved] = useState(false)
    const user = useSelector(selectUser)

    const [tempBios, setTempBios] = useState(data.biography);
    const [tempLinks, setTempLinks] = useState(data.links);

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

    const formattedBio = tempBios.split('\n').map((line, index) => (
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
                <EditableBios editable={edit} formattedBio={formattedBio} rawBio={tempBios} setTempBios={setTempBios} />
            </TextBox>
            <EditableLinks editable={edit} linkdata={tempLinks} setLinkdata={setTempLinks} />
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
