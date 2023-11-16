// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import React, { useState } from 'react';
// import ParticipationForm from './components/ParticipationForm';
// import Prizes from './components/Prizes';

// function App() {
//   const [selectedGame, setSelectedGame] = useState('');
//   const [selectedEvent, setSelectedEvent] = useState('olympic');
//   const [selectedSeason, setSelectedSeason] = useState('summer');

//   const handleFormSubmit = (game, event, season) => {
//     setSelectedGame(game);
//     setSelectedEvent(event);
//     setSelectedSeason(season);
//   };

//   return (
//     <div>
//       <ParticipationForm onFormSubmit={handleFormSubmit} />
//       {selectedGame && selectedEvent && selectedSeason && (
//         <div>
//           <h2>Selected Inputs:</h2>
//           <p>Selected Game: {selectedGame}</p>
//           <p>Selected Event: {selectedEvent}</p>
//           <p>Selected Season: {selectedSeason}</p>
//           <Prizes
//             selectedGame={selectedGame}
//             selectedEvent={selectedEvent}
//             selectedSeason={selectedSeason}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import ParticipationForm from './components/ParticipationForm';
import './App.css'
import Prizes from './components/Prizes';

function App() {
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('olympic');
  const [selectedSeason, setSelectedSeason] = useState('summer');
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (game, event, season, participationData) => {
    setSelectedGame(game);
    setSelectedEvent(event);
    setSelectedSeason(season);
    setSubmittedData(participationData); // Store submitted data
  };

  return (
    <div>
      <ParticipationForm onFormSubmit={handleFormSubmit} />
      {selectedGame && selectedEvent && selectedSeason && (
        <div>
          <h2>Selected Inputs:</h2>
          <p>Selected Game: {selectedGame}</p>
          <p>Selected Event: {selectedEvent}</p>
          <p>Selected Season: {selectedSeason}</p>
          <Prizes
            selectedGame={selectedGame}
            selectedEvent={selectedEvent}
            selectedSeason={selectedSeason}
          />
        </div>
      )}
      {submittedData && (
        <div>
          <h2>Submitted Details:</h2>
          <p>Participant Name: {submittedData.participantName}</p>
          <p>Participant Age: {submittedData.age}</p>
          <p>Country: {submittedData.country}</p>
          {/* Display other submitted details as needed */}
        </div>
      )}
    </div>
  );
}

export default App;
