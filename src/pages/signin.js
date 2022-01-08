import './signin.css';
import * as React from 'react';
import { useEffect, useState,useRef } from 'react';
import ProductsData from './product.json'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Paper from '@mui/material/Paper';
import SignInLogo from '../assets/images/search.jpeg'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
const SignIn=(props)=>{
    const ref = useRef(null);
    const [search, setSearch] =useState("");
    const [value, setValue] =useState(2);
    const navigate = useNavigate();
    const handleNav=()=> {
        navigate('/');
      }
    const handleNavSign=()=> {
        navigate('/signin');
      }
    const handleNavSignUp=()=> {
        navigate('/signup');
      }

   
    return (
      <>
      <div className='sign-container' style={{textAlign:"center"}}>
      <Grid container style={{justifyContent:"space-around"}}  alignItems="center" spacing={2}>
  <Grid item md={4} xs={10} sm={4}>
      <img className='signin-logo' src={SignInLogo} alt=' ' />
  </Grid>
  <Grid item md={5} xs={10} sm={9} >
    <div style={{textAlign:"start"}} className='login-inputs-container'>
    <h5 className='welcome-text'>Welcome To Kreesy's App</h5>
      <p className='signin-text'>Sign in to your account with email</p>
 
  <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      style={{width:"95%",margin:"10px"}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MailOutlineIcon />
      </IconButton>
      <TextField
          label="Email"
          id="filled-start-adornment"
          sx={{ m: 1, }}
          style={{width:"100%",}}
            
          variant="filled"
        />
     
    </Paper>

  <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      style={{width:"95%",margin:"10px"}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <HttpsOutlinedIcon />
      </IconButton>
      <TextField
          label="Password"
          id="filled-start-adornment"
          style={{width:"100%",}}
          sx={{ m: 1, }}
          type="password"
          variant="filled"
        />
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <VisibilityOutlinedIcon />
      </IconButton>
    </Paper>
  <div className="forget-password-container">


  <Link className="forget-password">
  Forget Password?
  </Link>
  </div>
  <div className='login-btn'>

  <Button  variant="contained" >
  Login
</Button>
  </div>
    </div>
    <div className='dont-have-account'>
      Don't have an account?<Link onClick={()=>handleNavSignUp()} className="forget-password">
  Sign up
  </Link>
    </div>
  </Grid>


</Grid>

      </div>
      <Box sx={{ pb: 7 }} >
      <CssBaseline />
     
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" onClick={()=>handleNav()}  icon={<HomeIcon />}/>
          <BottomNavigationAction label="Search"  icon={<SearchIcon />} />
          <BottomNavigationAction label="My List" onClick={()=>handleNavSign()} icon={<FavoriteBorderIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
    
      
      </>
    );
}

export default SignIn;
