import React from 'react';
import GoogleLogin from 'react-google-login';
class ggleLogin extends React.Component {
    responseGoogle(response){
        console.log(response);
    }
    render(){
        return(
            <GoogleLogin
                clientId = "106887562299-ra113bdksme1ail4dgj37g05p94cmnog.apps.googleusercontent.com"
                buttonText = "Login with Google"
                onSuccess ={this.responseGoogle}
                onFailure = {this.responseGoogle}
                className = "Google"
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
                ></GoogleLogin>
        )
    }
}
export default ggleLogin;