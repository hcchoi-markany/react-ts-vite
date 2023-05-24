import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { getAuth } from 'firebase/auth';
import { useIdToken } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import * as _ from 'lodash';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const auth = getAuth();
  const [user] = useIdToken(auth);
  console.log(user);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    console.log(auth);
    auth.signOut();
    console.log('logoutValue');
    setAnchorElUser(null);
  };

  const categoriesHeight = 30;
  const defaultHeaderHeight = 128;
  const [headerInfo, setHedaerInfo] = useState({
    height: defaultHeaderHeight,
    isDense: false,
  });

  const windowScroll = () => {
    const scrolly = window.scrollY;
    console.log(scrolly);
    const newHeaderInfo = _.cloneDeep(headerInfo);

    if (scrolly > headerInfo.height / 2) {
      newHeaderInfo.isDense = true;
      newHeaderInfo.height = defaultHeaderHeight / 2;
    } else {
      newHeaderInfo.isDense = false;
      newHeaderInfo.height = defaultHeaderHeight;
    }
    setHedaerInfo(newHeaderInfo);

    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', windowScroll);
    return () => window.removeEventListener('scroll', windowScroll);
  }, []);

  const LogoTypographyStyle = styled(Typography)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textDecoration: 'none',
    transitionProperty: 'opacity',
    transitionDuration: '0.1s',
    transitionTimingFunction: 'easeOut',
  });

  return (
    <Box display='block' height={headerInfo.height + categoriesHeight}>
      <AppBar
        position='fixed'
        color='transparent'
        sx={{
          boxShadow: 'none',
          height: headerInfo.height,
          bgcolor: headerInfo.isDense ? 'black' : 'white',
          transitionProperty: 'height',
          transitionDuration: '0.4s',
        }}
      >
        <Container maxWidth='xl' sx={{ height: '100%' }}>
          <Toolbar sx={{ height: '100%' }}>
            <LogoTypographyStyle
              variant='h3'
              color='block'
              sx={{
                opacity: headerInfo.isDense ? 0 : 1,
              }}
            >
              H.LAND
            </LogoTypographyStyle>

            <LogoTypographyStyle
              variant='h3'
              color='white'
              sx={{
                opacity: headerInfo.isDense ? 1 : 0,
              }}
            >
              H
            </LogoTypographyStyle>

            <Box textAlign='right' width='100%'>
              <span>{user?.displayName}</span>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src={user?.photoURL!} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Header;
