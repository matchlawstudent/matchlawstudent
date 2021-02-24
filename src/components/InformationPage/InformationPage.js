import React from 'react';
import { Grid, Paper, List, ListItem, ListItemText  } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import './InformationPage.css';
import Resources from '../../static/resources';



export default function InformationPage() {
  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{margin: "3%", fontStyle: "normal", fontWeight: "400", fontSize: "36px"}}>WA Legal Information</h1>
      <Grid container spacing={0} container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start" 
        style={{marginBottom: "20px"}}>          
        <Grid item xs={12} sm={4} className="info-grid" id="info-grid-one">
            <h1>Free Legal Help in WA</h1>
            {Resources.freeLegalHelp.map((resource) => (
              <p key={resource.text} ><a  href={resource.link} className="link-style" target="_blank">{resource.text}</a></p>
            ))}
        </Grid>
        <Grid item xs={12} sm={3} className="info-grid" id="info-grid-two">
            <h1>Legal Information & Resources</h1>
            {Resources.legalInfo.map((resource) => (
              <p key={resource.text} ><a href={resource.link} className="link-style" target="_blank">{resource.text}</a></p>
            ))}
        </Grid>
        <Grid item xs={12} sm={4} className="info-grid" id="info-grid-three">
            <h1>Covid Resources</h1>
            {Resources.covidInfo.map((resource) => (
              <p key={resource.text}><a  href={resource.link} className="link-style" target="_blank">{resource.text}</a></p>
            ))}
        </Grid>
      </Grid>
    </div>
  );
}