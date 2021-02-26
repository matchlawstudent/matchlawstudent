import React from 'react';
import { Grid, } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import './Information.css';
import Resources from '../../../static/resources';



export default function Information() {
  return (
    <div className="root">
      <h1 className="info-header">WA Legal Information</h1>
      <Grid container spacing={0} container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start" 
        style={{marginBottom: "20px"}}>          
        <Grid item xs={12} sm={4} className="info-grid" id="info-grid-one">
            <h2 className="title">Free Legal Help in WA</h2>
            {Resources.freeLegalHelp.map((resource) => (
              <p key={resource.text} ><a  href={resource.link} className="link-style" target="_blank">{resource.text}</a></p>
            ))}
        </Grid>
        <Grid item xs={12} sm={3} className="info-grid" id="info-grid-two">
            <h2 className="title">Legal Information & Resources</h2>
            {Resources.legalInfo.map((resource) => (
              <p key={resource.text} ><a href={resource.link} className="link-style" target="_blank">{resource.text}</a></p>
            ))}
        </Grid>
        <Grid item xs={12} sm={4} className="info-grid" id="info-grid-three">
            <h2 className="title">Covid Resources</h2>
            {Resources.covidInfo.map((resource) => (
              <p key={resource.text}><a  href={resource.link} className="link-style" target="_blank">{resource.text}</a></p>
            ))}
        </Grid>
      </Grid>
    </div>
  );
}