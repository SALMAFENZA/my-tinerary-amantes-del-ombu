import './App.css';
import React from 'react';
import {Header} from './Componentes/Header'
import imagen from '../src/logo.jpg'


function App() {
  return (
    <>
    <main className='main'>
      <div className='cont-principal'>
        <h1>My-Itinerary</h1>
        <h2>! Amazing Travels at Low Cost !</h2>
      </div>
    <Header/>
    <div className='body'>
        <div className='logo-image'>
          <img className='logo' src={imagen} alt='viaje'/>
        </div>
        <div className='cta-container'>
            <a className='location' href='-' target='_blank'><button type='button'>Cities</button></a>
            <a className='location' href='-'><button type='button'>Hotels</button></a>
        </div>
      </div>
    </main>
    <footer>
      <h3>Gabriel</h3>
      <p>Red sociales</p>
    </footer>
    </>
  );
}

export default App;
