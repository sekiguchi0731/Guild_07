// src/components/Layout.tsx
import React from 'react';
import HeaderBar from '../header';
import './index.scss'

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <HeaderBar />
      <div className='layout-content'>{children}</div>
    </>
  );
}

export default Layout;
