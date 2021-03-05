import React from 'react';
import './DashboardUser.css';

export default function SquareInfo(props) {
    return (
        <div className='container-square'>
            <h1 className='title'>{props.title}</h1>
            <ul className='content-list-container'> 
            {props.contentList.map((item, index) => (
                <li key={index} className='content-list'>{item}</li>
            )
            )}
            </ul>
        </div>
    )
}