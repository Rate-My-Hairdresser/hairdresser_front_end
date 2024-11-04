import React, { useState } from 'react'
import styled from "styled-components"
import { colors } from "../../../general/colors"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IconButton } from "@mui/material";

const HairDresserSideBio = () => {

    const [saved, setSaved] = useState(false)

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
            <BioBox>
                <BioText>
                    hfjdsahfkldsajfkjdsal;kfjasfjasdjdfasjf;lajf;dsaj;lkjfas;lkfjasdl;kjfd;slakjd;askjfd;dasjfkasjf;ajsfkjsafj
                </BioText>
            </BioBox>
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

const BioBox = styled.div`
`

const BioText = styled.p`
`

const Container = styled.div`
    background-color: ${colors.offwhite};
    height: 600px;
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`