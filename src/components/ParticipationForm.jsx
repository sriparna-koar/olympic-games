import React, { useState } from 'react';
import './ParticipationForm.css';

const ParticipationForm = ({ onAddDetails }) => {
  const [event, setEvent] = useState('olympic');
  const [season, setSeason] = useState('summer');
  const [game, setGame] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the form data and pass it to the parent component.
    const participationData = {
      event,
      season,
      game,
      participantName,
      age,
    };
    onFormSubmit(game, event, season, participationData); 
    // onAddDetails(participationData);
  };

  return (
    <div className="ParticipationForm">
      <h2>Olympic and Paralympic Game Participation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event:</label>
          <select value={event} onChange={(e) => setEvent(e.target.value)}>
            <option value="olympic">Olympic</option>
            <option value="paralympic">Paralympic</option>
          </select>
        </div>
        <div>
          <label>Season:</label>
          <select value={season} onChange={(e) => setSeason(e.target.value)}>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
          </select>
        </div>
        <div>
          <label>Game:</label>
          <select value={game} onChange={(e) => setGame(e.target.value)}>
            {/* Add game options based on the selected event and season */}
            {event === 'olympic' ? (
              season === 'summer' ? (
                <>
                  
                  <option value="athletics">Summer Lists</option>
                  <option value="rowing">Rowing</option>
                  <option value="diving">Diving</option>
                  <option value="judo">Judo</option>
                  <option value="fencing">Fencing</option>
                  <option value="hanball">Handball</option>
                  <option value="Sport climbing">Sport climbing</option>
                  <option value="Tennis">Tennis</option>
                  <option value="Freestyle BMX">Freestyle BMX</option>
                  
                </>
              ) : (
                <>
                  <option value="skiing">Winter Lists</option>
                  <option value="snowboarding">Snowboarding</option>
                  <option value="Speed skating">Speed skating</option>
                  <option value="Bobsleigh">Bobsleigh</option>
                  <option value="Snowboarding">Snowboarding</option>
                  <option value="Skeleton">Skeleton</option>
                  <option value="Sled dog racing">Sled dog racing</option>
                  <option value="Trampolining">Trampolining</option>
                  <option value="Alpine skiing">Alpine skiing</option>
                </>
              )
            ) : (
              season === 'summer' ? (
                <>
                  <option value="summerlists">Summer Lists</option>

                  <option value="wheelchair-basketball">Wheelchair Basketball</option>
                  <option value="sitting-volleyball">Sitting Volleyball</option>
                  <option value="Goalball">Goalball</option>
                  <option value="Blind football">Blind football</option>
                  <option value="Boccia">Boccia</option>
                  <option value="Archery">Archery</option>
                  <option value="Equestrian">Equestrian</option>
                </>
              ) : (
                <>
                  <option value="winterlists">Winter Lists</option>
                  <option value="sledge-hockey">Sledge Hockey</option>
                  <option value="adaptive-skiing">Adaptive Skiing</option>
                  <option value="Para biathlon">Para biathlon</option>
                  <option value="Para cross-country skiing">Para cross-country skiing</option>
                  <option value="Para ice hockey">Para ice hockey</option>
                  <option value="Para snowboard">Para snowboard</option>

                </>
              )
            )}
          </select>
        </div>
        <div>
          <label>Participant Name:</label>
          <input type="text" value={participantName} onChange={(e) => setParticipantName(e.target.value)} />
        </div>
        <div>
          <label>Participant Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div className="SubmittedDetails">
          <h2>Submitted Details:</h2>
          <p>Event: {submittedData.event}</p>
          <p>Season: {submittedData.season}</p>
          <p>Game: {submittedData.game}</p>
          <p>Participant Name: {submittedData.participantName}</p>
          <p>Participant Age: {submittedData.age}</p>
          <p>Country: {submittedData.country}</p>
          {/* Render other submitted details as needed */}
        </div>
      )}
    </div>
  );
};

export default ParticipationForm;
