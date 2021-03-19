import React, { Component, useState } from 'react';
import "./LoginSignUp.css";
import k from '../../../images/mls_logo_small.png';
import fl from '../../../images/logo.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkedInSign from "./linkendSignin";
import MediaLogin from './mediaLogin';
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
     
        return (
            <div class="grid-container">
                        <div class="grid-logo">
                            <img src={k}></img>
                           <a href ="https://www.facebook.com/"><FacebookIcon className ="image"></FacebookIcon></a>
                           <a href ="https://www.instagram.com"><InstagramIcon className ="image1"></InstagramIcon></a>
                           <a href ="https://www.linkedin.com"><LinkedInIcon className ="image1"></LinkedInIcon></a> 
                            
                        </div>
                        <div class="grid-item">
                
                        </div>
                        <div class="grid-item">
                            <Link
                                to="/login"
                            >
                                <button type="button" class="topssignUp">Log In</button>
                            </Link>
                            <Link
                                to="/signup"
                            >
                                <button type="button" class="toplogIn">Sign Up</button>
                            </Link>
                        </div>
                <div class="grid-item1">
                    <form>
                        <h1 class = "h1signin">Sign Up</h1>
                        
                        <label for="email">
                            <b>Email</b>
                        </label>
                        <br/>
                        <input type="text" placeholder="Please Enter Email" name="email" required/>
                        <br/>
                        <label for="psw"><b>Password</b></label><br/>
                        <input type="password" placeholder="Please Enter Password" name="passw" required/>
                        <br/>
                        <label for="psw-repeat"><b>Repeat Password</b></label><br/>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
                        <br/>
                        <label>
                            <input type="checkbox" checked="checked" name="remember"/> Remember Me
                        </label><br/><br/>
                        <p>By Signing in, you agree to <a href="#">Term of Use</a>.</p>
                        <div class="clearfix">
                        <button type="button" class="cancelbtn">Cancel</button>
                        <button type="submit" class="signupbtn">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div class="grid-item">
                    <br/><br/><br/><br/>
                    <div class="vl"></div>
                </div>
                <div class="grid-item">
                <form>
                    <br/><br/><br/><br/>
                    <MediaLogin/>
                    <LinkedInSign/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
