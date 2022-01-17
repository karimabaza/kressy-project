import React from "react";
import { useEffect, useState, useRef } from "react";
import "../home.css";
import Card from "../../components/card";
import { Dropdown, Form } from "react-bootstrap";
import ProductsData from "../product.json";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logo from "../../assets/images/logo.JPG";
import InputBase from "@mui/material/InputBase";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BottomNavigationctm from "../../components/BottomNavigationctm";
import Slider from "@mui/material/Slider";
import { Checkbox , FormControlLabel , FormGroup} from "@mui/material";
function valuetext(value) {
    return `${value}°C`;
  }
  
const WishList = (props) =>{
    const ref = useRef(null);
    const [search, setSearch] = useState("");
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(true);
    const SearchFilterData = ProductsData.filter((product) => {
      return product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
 
  
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
    }, []);
    const [valuers, setValuers] = React.useState([20, 37]);
  
    const handleChange = (event, newValue) => {
      setValuers(newValue);
    };
    return(
        <>
        <div className="page-header">
              <h2 className="home-text">
                <img className="page-logo" src={Logo} alt="" />
                <span>
                  <NotificationsNoneIcon className="icon-header" />
                  <SettingsOutlinedIcon className="icon-header" />
                </span>
              </h2>
            </div>
            <div className="container mb-3">
              <div className="row">
                <div className="col-md-10">
                  <Paper className="search-bar" onChange={(e) => setSearch(e.target.value)} sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}>
                    <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ "aria-label": "Search" }} />
                  </Paper>
                </div>
                <div className="col-md-2">
                  <Dropdown className="filter-dd">
                  <Dropdown.Toggle class="btn-theme-blue" id="dropdown-basic">
                      <FilterAltIcon/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <div>
                        <label>Set Price Range</label>
                        <Slider getAriaLabel={() => "Temperature range"} value={valuers} onChange={handleChange} valueLabelDisplay="auto" getAriaValueText={valuetext} />
                      </div>
                      <div>
                        <label>Select Company</label>
                        <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Daraz" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="OLX" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="PriceOye" />
                        </FormGroup>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row products gy-3">
                {SearchFilterData.map((product, index) => {
                  return (
                    <div className="col-md-4">
                      <Link to="/product" key={index} onClick={() => props.currentProd(product) || console.log(props.prod)}>
                        <Card url={product.url} name={product.name} price={product.price} description={product.description} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div></>
    )
}

export default WishList