// App.js
import React, { useState } from 'react';
import Home from './components/Home';
import JobDetails from './components/JobDetails';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [selectedVacancy, setSelectedVacancy] = useState('');

  const handleVacancySelected = (vacancy) => {
    setSelectedVacancy(vacancy);
    setView('jobDetails');
  };

  const handleRegisterClick = () => {
    setView('auth');
  };

  let currentView;
  switch (view) {
    case 'home':
      currentView = <Home onVacancySelected={handleVacancySelected} onRegisterClick={handleRegisterClick} />;
      break;
    case 'jobDetails':
      currentView = <JobDetails vacancy={selectedVacancy} />;
      break;
    case 'userProfile':
      currentView = <UserProfile />;
      break;
    case 'auth':
      currentView = <Auth />;
      break;
    default:
      currentView = <Home onVacancySelected={handleVacancySelected} onRegisterClick={handleRegisterClick} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* Puedes agregar tu propio encabezado si lo deseas */}
      </header>
      <main>
        {currentView}
      </main>
    </div>
  );
}

export default App;
