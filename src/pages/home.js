import './home.css';
import * as React from 'react';
import { useEffect, useState,useRef } from 'react';
import Card from '../components/card'
import ProductsData from './product.json'
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
import BottomNavigationctm from "../components/BottomNavigationctm";

const Home=(props)=>{
    const ref = useRef(null);
    const [search, setSearch] =useState("");
    const [value, setValue] =useState(0);
    const [loading,setLoading]=useState(true)
    const SearchFilterData=ProductsData.filter(product=>{
        return product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
    const navigate = useNavigate();
    const handleNav=()=> {
        navigate('/');
      }
      const handleSignIn=()=> {
        navigate('/signin');
      }

      const privacyPolicy=()=> {
        navigate('/privacy-policy');
      }

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1500);
    }, []);
   
    return (
      <>
      {loading 
      ?
      <div>
       <img className='logo' src={Logo} alt='' />
      </div>
      :
      <Box sx={{ pb: 7 }} >
      <CssBaseline />
      <List>
        <div className='page-header'>
            <h2 className='home-text' >
            <img className='page-logo' src={Logo} alt='' />
            <span>
                <NotificationsNoneIcon className='icon-header' />
                <SettingsOutlinedIcon className='icon-header' />
            </span>
            </h2>
            
            </div>
        <Container>
        <Paper className='search-bar'
      onChange={(e)=>setSearch(e.target.value)}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
    >
     
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'Search' }}
      />
      
    </Paper>
        </Container>
        <div className='products'>
            {SearchFilterData.map((product,index)=>{
                return(
                    <>
                       <Link  to="/product">
                    <div key={index} onClick={()=>props.currentProd(product) || console.log(props.prod)}>

                    <Card  
                    url={product.url}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    
                    />
                    </div>
                    </Link>
                    
                    </>
                )
            })}

        </div>
      </List>
      <BottomNavigationctm></BottomNavigationctm>
      {/* <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          
          <BottomNavigationAction label="Home"  icon={<HomeIcon />}/>
          <BottomNavigationAction label="Search" onClick={()=>handleNav()} icon={<SearchIcon />} />
          <BottomNavigationAction label="My List" onClick={()=>handleSignIn()} icon={<FavoriteBorderIcon />} />
          <BottomNavigationAction label="PrivacyPolicy" onClick={()=>privacyPolicy()} icon={<FavoriteBorderIcon />} />
        </BottomNavigation>
      </Paper> */}
    </Box>
    }
      
      </>
    );
}

export default Home;
