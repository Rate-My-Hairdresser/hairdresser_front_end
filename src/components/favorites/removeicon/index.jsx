import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Remove';

export default function RemoveIconbutton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="secondary" aria-label="remove">
        <RemoveIcon />
      </Fab>
    </Box>
  );
}
