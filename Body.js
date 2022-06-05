import React from 'react';
import data from './data';

export default function Main(props) {
  const cards = data.map((item) => {
    return (
      <div key={item.id} className={props.darkMode ? 'darkcard' : 'card'}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    );
  });

  return (
    <main className={props.darkMode ? 'dark' : ''}>
      <h1 className="main--title">WHAT SHOULD I DO WITH REACT</h1>
      <ul className="main--facts">
        <li>Know it so much I'll never forget about it</li>
        <li>Scale it to nodejs</li>
        <li>What is express and its uses</li>
        <li>Next js will also be added</li>
        <li>Be so good you'll always be wanted</li>
      </ul>
      <div className="card-row">{cards}</div>
    </main>
  );
}
