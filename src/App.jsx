import React from 'react';
import './App.css'; // Import file CSS untuk styling

import gambar1 from "./assets/gambar1.jpg";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Bayhaqi Indra Maulana</h1>
      <p className="app-description">Selamat datang di halaman saya!</p>
      <img src={gambar1} alt="gambar" className="app-image" />
    </div>
  );
}

export default App;