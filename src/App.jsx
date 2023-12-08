
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParticipationForm from './components/ParticipationForm'; 
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import About from './components/About';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PrizeDetailsForm from './components/PrizeDetailsForm';
import './App.css';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (participationData) => {
    setSubmittedData(participationData);
  };

  return (
    <Router>
      <div>
      <NavigationBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/participation-form" element={<ParticipationForm onAddDetails={handleFormSubmit} />} />
      <Route path="/prize-details" element={<PrizeDetailsForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      </Routes>
      {submittedData && (
        <div className="SubmittedDetails">
           <h2>Submitted Details:</h2>
          <p>Event: {submittedData.event}</p>
           <p>Season: {submittedData.season}</p>
           <p>Game: {submittedData.game}</p>
          <p>Participant Name: {submittedData.participantName}</p>
          <p>Participant Age: {submittedData.age}</p>
          <p>Country: {submittedData.country}</p>


          <p>Additional Notes: {submittedData.additionalNotes}</p>
          </div>
          

        )}
        
    
      </div>
    </Router>
    
  )
      };

export default App;
