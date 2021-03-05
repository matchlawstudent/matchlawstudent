import React from 'react';
import { Grid, } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import './DashboardUser.css';
import SquareInfo from './SquareInfo'



export default function DashboardUser() {
  return (
    <div className="main-container">
      <h1 className="info-header">Good morning, Amy!</h1>
      <div className='square-info-container'>
      <SquareInfo title='Submitted Questions' contentList={['a', 'b', 'c']}/>
      <SquareInfo title='Upcoming Appointments' contentList={['Jan 12', 'Jan 14', 'March 12']}/>
      <SquareInfo title='Documents' contentList={['doc1', 'doc2', 'doc3']}/>
      </div>
    </div>
  );
}