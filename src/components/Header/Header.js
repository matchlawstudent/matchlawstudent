import React from 'react';
import { Button, Grid, Toolbar, Divider } from '@material-ui/core';
import {withStyles,} from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useHistory } from "react-router-dom";
import './Header.css';

const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    background: "black",
    '&:hover': {
      backgroundColor: "black",
    },
    margin: "10px",
    borderRadius: "15px",
  },
}))(Button);

export default function Header() {
  const history = useHistory();

    
  function goHome() {
    history.push("/"); 
  }
  
  function goInfo() {
    history.push("/info")
  }

  function goAbout() {
    history.push("/about");
  }

  return (
    <Grid container alignItems="center" justify="center" alignContent="center" style={{borderBottom: "1px solid #367460"}}>
      <Grid item xs={12} sm={6} style={{textAlign: "left", display: "flex", alignItems: "center", margin: "10px"}}>
          <img src="/images/MathLaw.PNG"></img>
          <a href="https://www.linkedin.com/company/matchlawstudent/about/" target="_blank">
          <IconButton variant="link" component="span" style={{width: "15px", height: "15px"}}>    
              <LinkedInIcon style={{fontSize: "1.2em"}}/>
            </IconButton>
          </a>
            <IconButton variant="link" component="span" style={{width: "15px", height: "15px"}} >
              <InstagramIcon style={{fontSize: "1.2em"}}/>
            </IconButton>
            <IconButton variant="link" component="span" style={{width: "15px", height: "15px"}} >
              <FacebookIcon style={{fontSize: "1.2em"}}/>
            </IconButton>
      </Grid>
      <Grid item xs={12} sm={5} style={{textAlign: "right"}} >
        <Grid container justify="flex-end"  >
          <ColorButton onClick={goHome}>Home</ColorButton>
          <ColorButton onClick={goInfo}>Info</ColorButton>
          <ColorButton onClick={goAbout}>About</ColorButton>
          <ColorButton >Sign Up</ColorButton>
          <ColorButton >Log In</ColorButton>
        </Grid>
      </Grid>
    </Grid>
    
  );
}