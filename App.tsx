import React from 'react';
import Header from './Header';
import Body from './Body';
import data from './data';
import './style.css';

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const cards = data.map((item) => {
    return (
      <div key={item.id} className="card">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    );
  });

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Body darkMode={darkMode} />
      <div className="card-row">{cards}</div>
    </div>
  );
}
