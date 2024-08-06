import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// project import
import useAuth from '../../hooks/useAuth';

// assets
let Google = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/icons/google.svg';
let Twitter = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/icons/twitter.svg';
let Facebook = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/icons/facebook.svg';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

export default function FirebaseSocial() {
  const downSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  // @ts-ignore
  const { firebaseFacebookSignIn, firebaseGoogleSignIn, firebaseTwitterSignIn } = useAuth();
  const googleHandler = async () => {
    try {
      await firebaseGoogleSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const twitterHandler = async () => {
    try {
      await firebaseTwitterSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const facebookHandler = async () => {
    try {
      await firebaseFacebookSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, sm: 2 }}
      justifyContent={{ xs: 'space-around', sm: 'space-between' }}
      sx={{ '& .MuiButton-startIcon': { mr: { xs: 0, sm: 1 }, ml: { xs: 0, sm: -0.5 } } }}
    >
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!downSM}
        startIcon={<img src={Google} alt="Google" />}
        onClick={googleHandler}
      >
        {!downSM && 'Google'}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!downSM}
        startIcon={<img src={Twitter} alt="Twitter" />}
        onClick={twitterHandler}
      >
        {!downSM && 'Twitter'}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!downSM}
        startIcon={<img src={Facebook} alt="Facebook" />}
        onClick={facebookHandler}
      >
        {!downSM && 'Facebook'}
      </Button>
    </Stack>
  );
}
