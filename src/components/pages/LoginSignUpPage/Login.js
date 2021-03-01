import React, { Component, useState } from 'react';
import "./LoginSignUp.css";
import k from '../../../images/mls_logo_small.png';
import fl from '../../../images/logo.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Facebook from "./fbLogin";
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
                            <button type="button" class="topssignUp">Log In</button>
                            <button type="button" class="toplogIn">Sign Up</button>
                        </div>
                <div class="grid-item1">
                    <form>
                        <h1 class = "h1">Sign In</h1>
                        
                        <label for="email">
                            <b>Email</b>
                        </label>
                        <br/>
                        <input type="text" placeholder="Please Enter Email" name="email" required/>
                        <br/>
                        <label for="psw"><b>Password</b></label><br/>
                        <input type="password" placeholder="Please Enter Password" name="passw" required/>
                        <br/>
                        <label>
                            <input type="checkbox" checked="checked" name="remember"/> Remember Me
                        </label><br/>
                        <button type="submit" class="login">Log In</button>
                        <p>By Signing in, you agree to <a href="#">Term of Use</a>.</p>
                        <div class="clearfix">
                            I don’t have an account 
                            <span>&rarr;</span>
                            <button type="button" class="loginbtn">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div class="grid-item">
                    <br/><br/><br/><br/>
                    <div class="vl"></div>
                </div>
                <div class="grid-item">
                    <br/><br/><br/><br/>
                    <Facebook/>
                    <br/>
                    <button type="button" class="Google" >Sign in with Google</button>
                    <br/>
                    <button type="button" class="Twitter" >Sign in with Twitter</button>
                    <br/>
                    <button type="button" class="LinkedIn">Sign in with LinkedIn</button>
                </div>
            </div>
        );
    }
}


export default Login;
