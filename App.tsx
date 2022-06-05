import React from 'react';
import Header from './Header';
import Body from './Body';
import './style.css';

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Body darkMode={darkMode} />
      <div className="card-row"></div>
    </div>
  );
}
