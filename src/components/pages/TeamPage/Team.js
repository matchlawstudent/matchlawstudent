import React from 'react';
import TeamData from '../../../static/team-page-info'; 
import Avatar from '@material-ui/core/Avatar'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import './Team.css';



export default function Team() {
  return (
    <div className="root">
      <h1 className="team-header">Our Team</h1>
      <Grid container spacing={0} 
      alignItems="flex-start"
      justify="center">          
        {TeamData.teamData.map((member) => (
          <Grid item xs={12} sm={4} className="person" style={{marginBottom: "50px"}} key={member.name}>
            <Avatar src={member.image} className="avatar" style={{width: "150px", height: "150px"}}></Avatar>
            <p className="team-text">
            <span style={{fontWeight: "bold", fontSize: "15px"}}>{member.name}</span> 
            <a href={member.linkedin} target="_blank">
              <IconButton variant="link" color="primary" component="span" >
                <LinkedInIcon style={{fontSize: "20px", }}/>
              </IconButton>
            </a>
            <br></br><br></br>
              {member.bio}
            </p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}