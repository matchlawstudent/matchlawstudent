import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
firebase.initializeApp({
    apiKey: "AIzaSyAl4S2Y9Q_KGHAfgNcqmqYHOL6cORxyVRk",
    authDomain: "law-tech-platform-7c6bc.firebaseapp.com"
})
class mediaLogin extends Component {
    state = {isSignedIn: false}
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID
        ],
        callback: {
            signInSuccess: () => false
        }
    }
    componentDidMount= () => {
        firebase.auth().onAuthStateChanged(user => {this.setState({isSignedIn: !!user})
        console.log("user", user)
    }) 
        
    }
    render(){
        return (
            <div>
                {this.state.isSignedIn? (
                    <span>
                        <div> Sign In!</div>
                        <button onClick = {() => firebase.auth().signOut()}>Sign Out!</button>
                        <h1>welcome {firebase.auth().currentUser.displayName}</h1>
                    </span>
                
                ): (
                    <StyledFirebaseAuth
                    className = "FaceBook"
                    uiConfig = {this.uiConfig}
                    firebaseAuth = {firebase.auth()}
                    />
                )}
            </div>
        )
    }
}
export default mediaLogin;