import React from 'react';
import { Button, Grid, Toolbar, Divider } from '@material-ui/core';
import {withStyles,} from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useHistory } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
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
    width: "25%",
  },
}))(Button);

export default function Header() {
  const history = useHistory();

  function handleClick(event, path) {
    event.preventDefault();
    history.push(path);
  }

  return (
    <div>
      <Grid container alignItems="center" justify="center" alignContent="center" style={{borderBottom: "1px solid #367460"}}>
        <Grid item xs={6} sm={8} >
          <div style={{textAlign: "left", display: "flex", alignItems: "center", margin: "10px"}}>
            <img className="image" src="/images/MathLaw.PNG"></img>
            <div>
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
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div style={{textAlign: "right", margin: "atuo"}}>
            <Breadcrumbs >
              <Link color="inherit" href="/" onClick={(e) => handleClick(e, "/")}>
                Home
              </Link>
              <Link color="inherit" href="/info" onClick={(e) => handleClick(e, "/info")}>
                Legal Information
              </Link>
              <Link color="inherit" href="/about" onClick={(e) => handleClick(e, "/about")}>
                About
              </Link>
              <Link color="inherit" href="/about" onClick={(e) => handleClick(e, "/about")}>
                Login
              </Link>
              <Link color="inherit" href="/about" onClick={(e) => handleClick(e, "/about")}>
                Sign Up
              </Link>
            </Breadcrumbs>
          </div>
        </Grid>
      </Grid>
    </div>
    
  );
}
