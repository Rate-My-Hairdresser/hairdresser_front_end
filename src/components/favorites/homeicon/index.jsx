import * as React from 'react';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Homeicon() {
  return (
    <Stack direction="row" spacing={3} sx={{ alignItems: 'flex-end' }}>
      <HomeIcon fontSize="large" /> {/* Only one HomeIcon displayed here */}
    </Stack>
  );
}