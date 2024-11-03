import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { useState } from 'react';

import logo from './image/logo_tentative.webp';

function HeaderBar() {
  const [] = useState<HTMLElement | null>(null); // 修正: useStateの初期値を設定

  return (
    <AppBar position='fixed' sx={{ zIndex: 1201, backgroundColor: '#ffffff' }}>
      <Container maxWidth='xl' sx={{ px: { xs: 0, md: 3 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
            {/* メニュー */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            ></Box>
            {/* ロゴとタイトル */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
              }}
            >
              <Box
                component='img'
                src={logo}
                alt='Logo'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  height: 40,
                  bgcolor: 'primary.main',
                  backgroundColor: 'ffffff',
                }}
              />
              <Box
                component='img'
                src={logo}
                alt='Logo'
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  height: 40,
                }}
              />
              {/* タイトル追加 */}
              <Box
                component='span'
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'text.primary',
                  backgroundColor: '#D9D9D9',
                }}
              >
                Coin-Choice(仮)
              </Box>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}

export default HeaderBar;
