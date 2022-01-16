import "./signup.css";
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Paper from "@mui/material/Paper";
import SignInLogo from "../assets/images/search.jpeg";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TextField from "@mui/material/TextField";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import BottomNavigationctm from "../components/BottomNavigationctm";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
const SignUp = (props) => {
  const ref = useRef(null);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(2);
  const navigate = useNavigate();

  const gotosignin = () => {
    navigate("/signin");
  };
 
  return (
    <>
      <div fluid className="sign-container container-fluid h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-5 text-center">
            <div className="auth-pages-img">
              <img  src={SignInLogo} alt=" " />
            </div>
          </div>
          <div className="col-md-5">
            <div className="login-inputs-container">
              <h5 className="welcome-text">Welcome To Kreesy's App</h5>
              <p className="signin-text">Sign in to your account</p>
              <div className="google-container">
                <span className="google">
                  <BsGoogle />
                </span>
                <span className="google-text">Signup with Google</span>
              </div>
              <div className="apple-container">
                <span className="google">
                  <BsApple />
                </span>
                <span className="google-text">Signup with Apple</span>
              </div>
              <div className="facebook-container">
                <span className="google">
                  <FaFacebookF />
                </span>
                <span className="google-text">Signup with Facebook</span>
              </div>
              <p className="or">or</p>
              <hr />

              <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }} style={{ width: "95%", margin: "10px" }}>
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <MailOutlineIcon />
                </IconButton>
                <TextField label="Email" id="filled-start-adornment" sx={{ m: 1 }} style={{ width: "100%" }} variant="filled" />
              </Paper>
              <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }} style={{ width: "95%", margin: "10px" }}>
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <MailOutlineIcon />
                </IconButton>
                <TextField label="Password" type="password" id="filled-start-adornment" sx={{ m: 1 }} style={{ width: "100%" }} variant="filled" />
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <VisibilityOutlinedIcon />
                </IconButton>
              </Paper>
              <div className="login-email-btn">
                <Button  style={{ textTransform: "initial" }} variant="contained">
                  Continue with Email
                </Button>
                <div className="forget-password-container forget-password-signup">
                  <Link className="forget-password-signup">Forget Password?</Link>
                </div>
              </div>
            </div>
            <div className="dont-have-account-signup">
              Already have an account? <Link onClick={() => gotosignin()} className="forget-password">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ pb: 7 }}>
        <BottomNavigationctm></BottomNavigationctm>
      </Box>
    </>
  );
};

export default SignUp;
