import React, { Component } from 'react';
import Twitter from 'react-twitter-login';
class twitterLogin extends Component {
    responseTwitter(response) {
        console.log(response);
    }
 authHandler = (err, data) => {
        console.log(err, data);
};
    render() {
        return (
            <Twitter
                className = "Twitter"
                authCallback = {authHandler}
                consumerKey = {}
                consumerSecret = {}
            ></Twitter>
        )
    }
}
export default twitterLogin;