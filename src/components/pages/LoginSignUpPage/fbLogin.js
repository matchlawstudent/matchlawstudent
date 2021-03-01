import React from 'react';
  import FacebookLogin from 'react-facebook-login';
  import FacebookIcon from '@material-ui/icons/Facebook';
 
  class fbLogin extends React.Component {
    responseFacebook(response) {
      console.log(response);
    }
 
    render() {
      return (
        <FacebookLogin
          appId="126628396040538"
          autoLoad={true}
          fields="name,email,picture"
          cssClass = "FaceBook"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
        />
      )
    }
  }
 
  export default fbLogin;