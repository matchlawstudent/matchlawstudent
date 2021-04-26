import React from 'react';
import TeamData from '../../../static/team-page-info'; 
import Avatar from '@material-ui/core/Avatar'; 
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export default function Post() {
  return (
    <div className="root" style={{ padding: 20 }}>
      <h1 className="team-header">Our Team</h1>
      <Grid container spacing={1} 
      alignItems="flex-start"
      justify="space-evenly"
      className="team-container">          
        {TeamData.teamData.map((member) => (
          <Grid item  xs={12} sm={6} md={4} lg={3} xl={2} className="person" style={{marginBottom: "50px"}} key={member.name}>
            <Card className="team-card">
            <CardContent>
              <Avatar src={member.image} className="avatar" style={{width: "200px", height: "200px"}}></Avatar>
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
            </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}