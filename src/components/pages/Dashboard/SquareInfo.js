import React from 'react';
import './DashboardUser.css';

export default function SquareInfo(props) {
    return (
        <div className='container-square'>
            <div className='titleNButton'>
                <h1 className='title'>{props.title}</h1>
                <button className='plusButton'> + </button>
            </div>
            <ul className='content-list-container'> 
            {props.contentList.map((item, index) => (
                <li key={index} className='content-list'>{item}</li>
            )
            )}
            </ul>
        </div>
    )
}