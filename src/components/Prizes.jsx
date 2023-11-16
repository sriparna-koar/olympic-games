import React from 'react';
import './PrizeDetails.css';

const PrizeDetails = ({ details }) => {
  return (
    <div className="PrizeDetails">
      <h2>Added Details</h2>
      <p>Event: {details.event}</p>
      <p>Season: {details.season}</p>
      <p>Game: {details.game}</p>
      <p>Participant Name: {details.participantName}</p>
      <p>Age :{details.age}</p>
      <p>Country Name: {details.country}</p>
      

    </div>
  );
};

export default PrizeDetails;
