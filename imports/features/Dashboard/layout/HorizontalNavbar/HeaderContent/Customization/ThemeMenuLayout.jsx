import React from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from '../../../../../../ui/components/MainCard';

import useConfig from '../../../../../../hooks/useConfig';
// import { handlerDrawerOpen } from '../../../../../../api/menu';
import useStore from '../../../../../../store/store';

import { MenuOrientation, ThemeDirection } from 'config';

// assets
let defaultLayout = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/customization/default.svg';
let containerLayout = 'https://finasquare.s3.us-east-2.amazonaws.com/SATerminal/customization/container.svg';

// ==============================|| CUSTOMIZATION - CONTAINER ||============================== //

export default function ThemeMenuLayout() {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuOrientation, onChangeMenuOrientation, onChangeMiniDrawer, onChangeDirection } = useConfig();
  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  // const handleContainerChange = (e) => {
  //   if (e.target.value === MenuOrientation.HORIZONTAL) {
  //     onChangeMiniDrawer(true);
  //     onChangeDirection(ThemeDirection.LTR);
  //     onChangeMenuOrientation(e.target.value);
  //     handlerDrawerOpen(false);
  //   } else {
  //     onChangeMiniDrawer(true);
  //     onChangeDirection(ThemeDirection.LTR);
  //     onChangeMenuOrientation(e.target.value);
  //     handlerDrawerOpen(true);
  //   }
  // };
  const { toggleDashboardDrawer } = useStore((state) => ({
    toggleDashboardDrawer: state.toggleDashboardDrawer
  }));

  const handleContainerChange = (e) => {
    if (e.target.value === MenuOrientation.HORIZONTAL) {
      onChangeMiniDrawer(true);
      onChangeDirection(ThemeDirection.LTR);
      onChangeMenuOrientation(e.target.value);
      toggleDashboardDrawer(false);
    } else {
      onChangeMiniDrawer(true);
      onChangeDirection(ThemeDirection.LTR);
      onChangeMenuOrientation(e.target.value);
      toggleDashboardDrawer(true);
    }
  };
  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={menuOrientation} onChange={handleContainerChange}>
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        <Grid item>
          <FormControlLabel
            control={<Radio value={MenuOrientation.VERTICAL} sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: !isHorizontal ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                border={false}
                {...(!isHorizontal && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={defaultLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Vertical</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio value={MenuOrientation.HORIZONTAL} sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: isHorizontal ? 'primary.lighter' : 'secondary.lighter', p: 1 }}
                border={false}
                {...(isHorizontal && { boxShadow: true, shadow: theme.customShadows.primary })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={containerLayout} alt="horizontal" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Horizontal</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
      </Grid>
    </RadioGroup>
  );
}
