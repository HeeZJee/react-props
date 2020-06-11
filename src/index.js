import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MediaCard from './MediaCard';
import Gate from './Gate';


ReactDOM.render(
  <React.StrictMode>
    <MediaCard title="Hafeez Ghanchi" body={`React Engineer`} imageUrl="./logo192.png"> </MediaCard>
    <Gate isOpen={false}></Gate>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()