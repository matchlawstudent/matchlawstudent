import { react } from "@babel/types";
import { maxHeight } from "@material-ui/system";
import React, { Component} from 'react';
import LinkedIn from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
class linkendSignin extends Component {
    responseLinkedIn(response){
        console.log(response);
    }
    render() {
        return(
            <LinkedIn
            clientId = "86ley709u4x4hu"
            onFailure = {this.responseLinkedIn}
            onSuccess = {this.responseLinkedIn}
            redirectUri = "https://www.matchlawstudent.com" 
            className = "LinkedIn"
            scope = 'r_emailaddress'
            ><img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '220px'}} /></LinkedIn>
        );
    }
}
export default linkendSignin;