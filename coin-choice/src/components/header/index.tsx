// src/components/header/index.tsx
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import './index.scss';

import logo from './image/logo_tentative.webp';

function HeaderBar() {
  return (
    <AppBar position='fixed' color='transparent' className='header-bar' >
      <Container maxWidth='xl' className='header-container'>
        <Toolbar className='header-toolbar'>
          {/* メニュー */}
          <Box className='header-menu'></Box>

          {/* ロゴとタイトル */}
          <Box className='header-logo-container'>
            {/* デスクトップ用ロゴ */}
            <Box
              component='img'
              src={logo}
              alt='Logo'
              className='logo-img desktop'
            />
            {/* モバイル用ロゴ */}
            <Box
              component='img'
              src={logo}
              alt='Logo'
              className='logo-img mobile'
            />
            {/* タイトル */}
            <Box component='span' className='header-title'>
              Cacheless
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderBar;
