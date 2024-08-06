import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

// project import
import Drawer from './layout/LeftNavbar';
import Header from './layout/HorizontalNavbar';
import Footer from './layout/Footer';
import HorizontalBar from './layout/LeftNavbar/HorizontalBar';
import Loader from '../../ui/components/Loader';
import Breadcrumbs from '../../ui/components/@extended/Breadcrumbs';
import AuthGuard from '../../features/Auth/components/route-guard/AuthGuard';

import { MenuOrientation } from 'config';
import useConfig from '../../hooks/useConfig';
// import { handlerDrawerOpen, useGetMenuMaster } from '../../api/menu';
import useStore from '../../store/store';

// ==============================|| MAIN LAYOUT ||============================== //

export default function DashboardLayout() {
  // const { menuMasterLoading } = useGetMenuMaster();
  const menuMasterLoading = useStore((state) => state.menuMasterLoading);
  const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const { container, miniDrawer, menuOrientation } = useConfig();

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;
  const toggleDashboardDrawer = useStore((state) => state.toggleDashboardDrawer);

  // set media wise responsive drawer
  useEffect(() => {
    if (!miniDrawer) {
      // handlerDrawerOpen(!downXL);
      toggleDashboardDrawer(!downXL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downXL, toggleDashboardDrawer]);

  if (menuMasterLoading) return <Loader />;

  return (
    // <AuthGuard>
      <Box sx={{ display: 'flex', width: '100%', padding: '0' }}>
        <Header />
        {!isHorizontal ? <Drawer /> : <HorizontalBar />}

        <Box component="main" sx={{width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Toolbar sx={{ mt: isHorizontal ? 8 : 'inherit' }} />
          <Container
            maxWidth={container ? 'xl' : false}
            sx={{
              ...(container && { px: { xs: 0, sm: 2 } }),
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Breadcrumbs />
            <Outlet />
            <Footer />
          </Container>
        </Box>
      </Box>
    // </AuthGuard>
  );
}
