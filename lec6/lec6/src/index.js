import React from 'react';
import ReactDOM from 'react-dom/client';

const name="md shahadoth ali"
const abc="goodbye"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <h3 className="headingStyle">{name}</h3>
  <div className='card'>
    <h1 className='cardtitle'>welcome!!</h1>
    <h1 className='description'>Diam est justo sed dolore et dolor, et diam lorem vero sanctus tempor consetetur et,
     elitr accusam amet stet clita.</h1>
     <h1 className='footer'>{abc}</h1>

  </div>
</div>
);


