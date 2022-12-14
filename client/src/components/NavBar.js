import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem, Menu, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentUser } from '../recoil/atoms';

export default function NavBar() {

    const [anchorEl, setAnchorEl] = React.useState(null)
    const [user, setUser] = useRecoilState(currentUser)

    const navigate = useNavigate()
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleLogout() {
        fetch("/logout", {
            method: 'DELETE',
        }).then(setUser(null))
        .then(navigate("/login"))
    }



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem 
                        onClick={handleClose}
                        component={Link}
                        to='/'
                    >
                        Pokedex
                    </MenuItem>
                    <MenuItem 
                        onClick={handleClose}
                        component={Link}
                        to='/team'
                    >
                        My Team
                    </MenuItem>
                </Menu>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Pokedex
                </Typography>
                {!user ? (
                    <Button 
                        color="inherit"
                        component={Link}
                        to='/login'
                    >
                        Login
                    </Button>
                ) : (
                    <Box display={'flex'}>
                        <Typography alignSelf={'center'}>
                            HELLO, {user.username.toUpperCase()}
                        </Typography>
                        <Button 
                            color="inherit"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </Box>
                )}
            </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}