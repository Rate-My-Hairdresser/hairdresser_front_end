import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from "../../../general/colors"

export default function RemoveIconbutton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab sx={{ backgroundColor: colors.secondaryBackground}}  aria-label="remove">
        <CloseIcon />
      </Fab>
    </Box>
  );
}
