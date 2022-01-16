
import react , { useEffect, useState,useRef } from 'react';
import Card from './card'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logo from '../assets/images/logo.JPG'
import InputBase from '@mui/material/InputBase';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
const BottomNavigationctm = () =>{
  const [value, setValue] =useState(0);
    const navigate = useNavigate();
    const gotohome = () =>{
      navigate('/');
    }
    // const handleNav=()=> {
    //     navigate('/');
    //   }
      const handleSignIn=()=> {
        navigate('/signin');
      }

      const privacyPolicy=()=> {
        navigate('/privacy-policy');
      }
    return(
        <div>
             <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          
          <BottomNavigationAction label="Home"  onClick={()=>gotohome()} icon={<HomeIcon />}/>
          <BottomNavigationAction label="Search"  icon={<SearchIcon />} />
          <BottomNavigationAction label="My List" onClick={()=>handleSignIn()} icon={<FavoriteBorderIcon />} />
          <BottomNavigationAction label="PrivacyPolicy" onClick={()=>privacyPolicy()} icon={<SecurityIcon />} />
        </BottomNavigation>
      </Paper>
        </div>
    )
}
export default BottomNavigationctm;