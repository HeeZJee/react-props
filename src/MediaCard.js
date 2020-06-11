import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';


const MediaCard = ({ title, body, imageUrl }) => (

    <Fragment>
        <h2>{title}</h2>
        <p>I am <strong>{body}</strong></p>
        <img src={imageUrl} alt={body} />
    </Fragment>
);



export default MediaCard;