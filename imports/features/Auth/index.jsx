import React from 'react';
import { Outlet } from 'react-router-dom';

// project import
import GuestGuard from './components/route-guard/GuestGuard';

// ==============================|| LAYOUT - AUTH ||============================== //

export default function AuthLayout() {
  return (
    <GuestGuard>
      <Outlet />
    </GuestGuard>
  );
}
