import './signup.css';
import * as React from 'react';
import { useEffect, useState,useRef } from 'react';
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
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextField from '@mui/material/TextField';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import { BsGoogle,BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SignUp=(props)=>{
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
      <div fluid className='sign-container' style={{textAlign:"center"}}>
      <Grid container style={{justifyContent:"space-around"}} alignItems="center" spacing={2}>
  <Grid item md={4} xs={10} sm={4}>
      <img className='signin-logo' src={SignInLogo} alt=' ' />
  </Grid>
  <Grid item md={5} xs={10} sm={9} >
    <div style={{textAlign:"start"}} className='login-inputs-container'>
    <h5 className='welcome-text'>Welcome To Kreesy's App</h5>
      <p className='signin-text'>Sign in to your account</p>
      <div className='google-container'><span className='google'><BsGoogle /></span><span className='google-text'>Login with Google</span></div>
      <div className='apple-container'><span className='google'><BsApple /></span><span className='google-text'>Login with Apple</span></div>
      <div className='facebook-container'><span className='google'><FaFacebookF /></span><span className='google-text'>Login with Facebook</span></div>
      <p className='or'>or</p>
      <hr />
      
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
  
  <div className='login-email-btn' >

  <Button onClick={()=>handleNavSign() } style={{textTransform:"initial"}} variant="contained" >
  Continue with Email
</Button>
<div className="forget-password-container forget-password-signup">


  <Link className="forget-password-signup">
  Forget Password?
  </Link>
  </div>
  </div>
    </div>
    <div className='dont-have-account-signup'>
      Don't have an account? <Link  className="forget-password">
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

export default SignUp;
