import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? 'dark' : ''}>
      <img
        className="nav--logo_icon"
        src="https://media.istockphoto.com/photos/vegan-buttons-badge-picture-id1352467795?k=20&m=1352467795&s=612x612&w=0&h=TnT3ZPSSJ90h6KwxyZWDDQlVQLlFxD3tOXXdjUKLL4o="
      />
      <h3 className="nav--logo_text">VEGAN-YEMI</h3>

      <div className="toggler">
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
      </div>
    </nav>
  );
}
