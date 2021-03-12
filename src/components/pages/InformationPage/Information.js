import React from 'react';
import { Grid, } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import './Information.css';
import Resources from '../../../static/resources';
import questionsAndAnswers from '../../../static/q-and-a'; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'; 

export default function Information() {
  return (
    <div className="root">
      <h1 className="info-header">WA Legal Information</h1>
      <Grid container spacing={0} container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start" 
        style={{marginBottom: "20px"}}>          
        <Grid item xs={12} sm={5} md={4} className="info-grid" id="info-grid-one">
            <h2 className="title">Free Legal Help in WA</h2>
            {Resources.freeLegalHelp.map((resource) => (
              <p key={resource.text} ><a  href={resource.link} className="link-style" target="_blank">{resource.text}</a></p>
            ))}
        </Grid>
        <Grid item xs={12} sm={5} md={3} className="info-grid" id="info-grid-two">
            <h2 className="title">Legal Information & Resources</h2>
            {Resources.legalInfo.map((resource) => (
              <p key={resource.text} ><a href={resource.link} className="link-style" target="_blank">{resource.text}</a></p>
            ))}
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="info-grid" id="info-grid-three">
            <h2 className="title">Covid Resources</h2>
            {Resources.covidInfo.map((resource) => (
              <p key={resource.text}><a  href={resource.link} className="link-style" target="_blank">{resource.text}</a></p>
            ))}
        </Grid>
      </Grid>
      <h1 style={{textDecoration: "underline", marginBottom: "20px"}}>Q & A</h1>
      <Grid container
      direction="row"
      justify="space-around"
      alignItems="flex-start" 
      style={{marginBottom: "20px"}}>
          {
            questionsAndAnswers.questionsAndAnswers.map((lawCat) => (
              <Grid item xs={12} sm={6} md={2}>
                <Card style={{  background: "#384728", color: "white",}}>
                  <CardContent ><h3>{lawCat.name}</h3></CardContent>
                  <CardContent style={{textAlign: "left"}}>
                    {lawCat.description}
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
      </Grid>
    </div>
  );
}