import './App.css';
import logo from './assets/logo_3.png';
import cover from './assets/album-art.png';
import { useEffect } from 'react';
import { PowerGlitch } from 'powerglitch';

function App() {
  useEffect(() => {
    PowerGlitch.glitch('.logo', {
      playMode: 'hover',
      createContainers: true,
      hideOverflow: false,
      timing: {
        duration: 1500,
        iterations: Infinity,
        easing: 'ease-in-out',
      },
      glitchTimeSpan: { start: 0, end: 1 },
      shake: {
        velocity: 6,
        amplitudeX: 0.03,
        amplitudeY: 0.01,
      },
      slice: {
        count: 4,
        velocity: 15,
        minHeight: 0.01,
        maxHeight: 0.04,
        hueRotate: true,
        offset: 30 
      },
    });
  }, []);

  useEffect(() => {
  PowerGlitch.glitch('.music-card', {
    playMode: 'always', // 🔁 Always on
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 10000,        // Longer animation cycle
      iterations: Infinity,
      easing: 'ease-out	',
    },
    glitchTimeSpan: { start: 0.01, end: 0.05 }, // Smaller glitch window within each cycle
    shake: {
      velocity: 1,
      amplitudeX: 0.005,     // Very light horizontal jitter
      amplitudeY: 0.005,     // Very light vertical jitter
    },
    slice: {
      count: 10,
      velocity: 5,
      minHeight: 0.005,
      maxHeight: 0.005,
      hueRotate: true,      // You can turn this on if you want color flicker
      offset: 5
    },
  });
}, []);

  return (
    <div className="app">
      <marquee>🔥 New drop every Monday! Submit yours! 🔥</marquee>
      <br />
      <header className="logo-wrap">
        <img src={logo} alt="Dave's Burn Folder" className="logo" />
      </header>

      <div className="nav-bar">
        <nav className="nav-container">
          <a href="#">SPOTIFY_PLAYLIST</a>
          <a href="#">SUBMIT_A_SONG</a>
          <a href="#">FAQ</a>
          <a href="#">CONTACT</a>
        </nav>
      </div>

      <main className="content">
        <div className="music-card">
          <img src={cover} alt="Album Art" className="album-art" />
          <div className="song-info">
            <h2>Jumper</h2>
            <p>Third Eye Blind</p>
            <span className="tag">Rock</span>
          </div>
        </div>

        <div className="blurb">
          <p>This one hit me like a bus on a rainy Tuesday.</p>
        </div>
      </main>

      <footer className="player-footer">
        <span>📁 5 Tracks loaded | 🟢 Connected | 🔊 80%</span>
      </footer>
    </div>
  );
}

export default App;