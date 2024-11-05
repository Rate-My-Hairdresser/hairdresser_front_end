import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

export default function RemoveIconbutton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="white" aria-label="remove">
        <CloseIcon />
      </Fab>
    </Box>
  );
}
