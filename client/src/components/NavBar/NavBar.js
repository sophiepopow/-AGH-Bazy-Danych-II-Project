import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import jwt from 'jsonwebtoken'


const showAlways = () => true
const isNotLoggedIn = (user) => !user;
const isLoggedIn = (user) => user;
const isAdmin = (user) => user && user.role === "admin";
const isSeller = (user) => user && user.role === "seller"

const pages = ['Login', 'Register', 'Products', 'Add product', 'Stores', "Admin panel"];
const showPanelCondition = [
  isNotLoggedIn,
  isNotLoggedIn,
  showAlways,
  (user) => isAdmin(user) || isSeller(user),
  showAlways,
  isAdmin
]

const pagesLinks = ['/login', '/register', '/products', '/addproduct','/stores', '/customers/list'];
const settings = ['Logout'];

const ResponsiveAppBar = () => {

  const [user, setUser] = React.useState(null);
  
  React.useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      const data = jwt.decode(token)
      console.log(data)
      setUser(data);
      if (!data){
        localStorage.removeItem('token')
      }
    }
  },[])


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(undefined)
    window.location.href = '/login'
  };

  return (
    <AppBar position="static" color="success">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => { navigate('/'); }}
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={"logo.png"} className={styles.logo} alt={'logo'}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, i) => (
                <>{showPanelCondition[i](user) &&
                  <MenuItem key={page} onClick={() => {
                  navigate(pagesLinks[i]);
                  handleCloseNavMenu();
                }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>}</>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={"logo.png"} className={styles.logoSmall} alt=""/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
            {pages.map((page, i) => (
              <>
               {showPanelCondition[i](user) && <Button
                key={page}
                onClick={() => {
                    navigate(pagesLinks[i]);
                    handleCloseNavMenu();
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              }
              </>
            ))}
          </Box>

          {isLoggedIn(user) && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
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
                <MenuItem key={setting} onClick={handleLogout}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
