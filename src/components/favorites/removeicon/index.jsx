import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from "../../../general/colors"


export default function RemoveIconbutton( {index, setResult} ) {

  const handleRemove = () => {
    var temp = JSON.parse( '[' + sessionStorage.getItem("favorites") + ']');
    temp.splice(index, 1);
    sessionStorage.setItem("favorites", temp);
    setResult[1](setResult[0] + 1);
  }

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab 
        sx={{
          backgroundColor: colors.dark_background,
          
          boxShadow: `0 2px 3px ${colors.secondary}`, 
          '&:hover': {
            
            backgroundColor: colors.dark_background, 
            transform: 'scale(1.01)',            
            boxShadow: `0 4px 2px ${colors.secondary}`, 
          },
        }}  
        aria-label="remove"
      >
        <CloseIcon onClick={handleRemove} />
      </Fab>
    </Box>
  );
}
