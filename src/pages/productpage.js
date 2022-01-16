import "./productpage.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Logo from "../assets/images/logo.JPG";
import Container from "@mui/material/Container";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InputBase from "@mui/material/InputBase";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import { Carousel } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ProductsData from "./product.json";
import Card from "../components/card2";
import { Link } from "react-router-dom";
import BottomNavigationctm from "../components/BottomNavigationctm";
const ProductPage = (props) => {
  const ref = useRef(null);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/");
  };

  return (
    <>
      <Box sx={{ pb: 7 }}>
        <CssBaseline />
        <List>
          <div className="page-header">
            <h2 className="home-text">
              <img className="page-logo" src={Logo} alt="" />
              <span>
                <NotificationsNoneIcon className="icon-header" />
                <SettingsOutlinedIcon className="icon-header" />
              </span>
            </h2>
          </div>
          <Container>
            <Paper className="search-bar" onChange={(e) => setSearch(e.target.value)} sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}>
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search " inputProps={{ "aria-label": "Search " }} />
            </Paper>
            <Box sx={{ flexGrow: 1, m: "20px" }} md={{ m: "20px" }}>
              <Grid container justifyContent="space-between" spacing={2}>
                <Grid item md={6}>
                  <Carousel touch={true} indicators={false}>
                    <Carousel.Item>
                      <img className="d-block w-100 carousel-img" src={props.prod.image2} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 carousel-img" src={props.prod.image3} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 carousel-img" src={props.prod.url} alt="Third slide" />
                    </Carousel.Item>
                  </Carousel>
                </Grid>
                <Grid style={{ position: "relative" }} item md={6}>
                  <Typography gutterBottom variant="h4" component="div">
                    {props.prod.name}
                    <span>
                      <IconButton style={{ float: "right" }} aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                    </span>
                  </Typography>

                  <Typography variant="body2" style={{ marginTop: "8%" }} color="text.secondary">
                    {props.prod.description}
                  </Typography>
                  <Typography style={{ marginTop: "8%", color: "#575757" }} gutterBottom variant="h4" component="div">
                    $ <span style={{ float: "right" }}>{props.prod.price}</span>
                  </Typography>

                  <Button className="buy-button" variant="contained">
                    Buy
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </List>
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction onClick={() => handleNav()} label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            <BottomNavigationAction label="My List" icon={<FavoriteBorderIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
      <div style={{ padding: "20px" }}>
        <Typography gutterBottom variant="h4" component="div">
          Recommended
        </Typography>
        <div className="container-fluid">
          <div className="row products gy-3">
          {ProductsData.map((product, index) => {
            return (
              <div className="col-md">
                <Link to="/product" key={index} onClick={() => props.currentProd(product) || console.log(props.prod)}>
                  <Card url={product.url} name={product.name} price={product.price} description={product.description} />
                </Link>
              </div>
            );
          })}
          </div>
          <BottomNavigationctm></BottomNavigationctm>
        </div>
       
      </div>
    
    </>
  );
};

export default ProductPage;
