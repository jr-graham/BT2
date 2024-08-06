import React from 'react';
// material-ui
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from './../../../../../ui/components/MainCard';

// assets
let avatar = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/users/avatar-group.png';
import AnimateButton from './../../../../../ui/components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function NavCard() {
  return (
    <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
      <Stack alignItems="center" spacing={2.5}>
        <CardMedia component="img" image={avatar} />
        <Stack alignItems="center">
          <Typography variant="h5">Help?</Typography>
          <Typography variant="h6" color="secondary">
            Get to resolve query
          </Typography>
        </Stack>
        <AnimateButton>
          <Button variant="shadow" size="small" component={Link} href="https://codedthemes.support-hub.io/" target="_blank">
            Support
          </Button>
        </AnimateButton>
      </Stack>
    </MainCard>
  );
}
