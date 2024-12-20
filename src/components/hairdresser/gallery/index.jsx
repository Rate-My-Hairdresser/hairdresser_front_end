import styled from "styled-components";
import { colors } from "../../../general/colors";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Modal, Box } from "@mui/material";
import { HeaderText } from "../../../general/Text";
import { useState } from "react";

const HairdresserGallery = ({photos}) => {

    
    const iconColor = '#FFF' //const [iconColor, setIconColor] = useState("#FFF")
    const [fullscreen, setFullscreen] = useState(false)
    const [fullImage, setFullImage] = useState("")

    const fullscreenPressed = async (image) => {
        // const color = await getIconColor(image);
        // setIconColor(color)
        setFullImage(image)
        setFullscreen(true)
    }


    // IMPLEMENT THIS WHEN WE HAVE LOCAL IMAGES 

    // const getIconColor = async (imageSrc) => {
    //     return new Promise((resolve) => {
    //       const img = new Image();
    //       img.crossOrigin = "Anonymous"; // To handle cross-origin issues if needed
    //       img.src = imageSrc;
      
    //       img.onload = () => {
    //         const canvas = document.createElement('canvas');
    //         const context = canvas.getContext('2d');
      
    //         canvas.width = img.width;
    //         canvas.height = img.height;
    //         context.drawImage(img, 0, 0);
            
    //         // Get pixel data from the bottom corner
    //         const pixelData = context.getImageData(img.width - 1, img.height - 1, 1, 1).data;
    //         const color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
      
    //         const contrastingColor = tinycolor(color).isLight() ? '#000' : '#FFF';
    //         resolve(contrastingColor);
    //       };
    //     });
    //   };
    return (
        <Container id={"review"}>
            <HeaderText>Gallery</HeaderText>
            <ImageList 
                sx={{
                    height: "30rem",
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: colors.dark_background,
                    },
                }} 
                cols={3} 
                rowHeight={400}
            >
                {
                    Object.entries(photos).map(([key, value], index) => (
                        <ImageListItem key={index} >
                            <Pics
                                src={`${value}`}
                                alt={key}
                                loading="lazy"
                            />
<ImageListItemBar
    sx={{
        borderRadius: "0px 0px 15px 15px",
        backgroundColor: "rgba(0, 0, 0, 0.7)" // Dark background with 70% opacity
    }}
    title={key}
    actionIcon={
        <IconButton
            sx={{ color: 'white' }}
            aria-label={`Fullscreen ${key}`}
            onClick={() => fullscreenPressed(value)}
        >
            <FullscreenIcon />
        </IconButton>
    }
/>
                        </ImageListItem>
                    ))
                }
            </ImageList>
            <Modal
                open={fullscreen}
                onClose={() => setFullscreen(false)}
            >
                <Box sx={{position: 'absolute', width: "30%",  top: '50%', left: '50%',transform: 'translate(-50%, -50%)'}}>
                    <IconButton sx={{position: 'absolute', right: 2, bottom: 2}} onClick={() => {setFullscreen(false)}}>
                        <FullscreenExitIcon style={{color: iconColor}} />
                    </IconButton>
                    <Fullscreen src={fullImage}/>
                </Box>
            </Modal>
        </Container>
    )
}

export default HairdresserGallery;

const Container = styled.div`
    background-color: ${colors.background};
    border-radius: 15px;
    padding: 1rem;
    display: flex;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Increased shadow size */

    flex-direction: column;
`

const Pics = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
`

const Fullscreen = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
`