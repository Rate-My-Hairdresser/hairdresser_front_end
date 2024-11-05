import styled from "styled-components";
import { colors } from "../../../general/colors";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Modal, Box, Paper } from "@mui/material";
import tinycolor from "tinycolor2";
import data from "../data.json"
import { useState } from "react";

const HairdresserGallery = () => {

    const [iconColor, setIconColor] = useState("#FFF")
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
            <ImageList sx={{height: "30rem"}} cols={3} rowHeight={400}>
                {
                    Object.entries(data.gallery).map(([key, value], index) => (
                        <ImageListItem key={index}>
                            <Pics
                                src={`${value}`}
                                alt={key}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={key}
                                actionIcon={
                                    <IconButton
                                      sx={{ color: 'white' }}
                                      aria-label={`Fullscreen ${key}`}
                                    >
                                      <FullscreenIcon onClick={() => fullscreenPressed(value)}/>
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