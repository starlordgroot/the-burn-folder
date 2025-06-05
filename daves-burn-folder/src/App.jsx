import './App.css';
import logo from './assets/logo_3.png';
import cover from './assets/album-art2.png';
import pick from './assets/pick.png';
import { useEffect, useState } from 'react';
import { PowerGlitch } from 'powerglitch';
import fireGif from './assets/site-images/fireball-loop.gif';

function App() {
  const [showFire, setShowFire] = useState(false);

  const handleStickerClick = () => {
    setShowFire(true);
    setTimeout(() => setShowFire(false), 1500); // show fire for 1.5 seconds
  };

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
        offset: 30,
      },
    });
  }, []);

  useEffect(() => {
    PowerGlitch.glitch('.activate-windows', {
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
        offset: 30,
      },
    });
  }, []);

  useEffect(() => {
    PowerGlitch.glitch('.music-card', {
      playMode: 'always',
      createContainers: true,
      hideOverflow: false,
      timing: {
        duration: 10000,
        iterations: Infinity,
        easing: 'ease-out',
      },
      glitchTimeSpan: { start: 0.01, end: 0.05 },
      shake: {
        velocity: 1,
        amplitudeX: 0.005,
        amplitudeY: 0.005,
      },
      slice: {
        count: 10,
        velocity: 5,
        minHeight: 0.005,
        maxHeight: 0.005,
        hueRotate: true,
        offset: 5,
      },
    });
  }, []);

  return (
    <div className="app">
      <div className="frame-box">
        <marquee>🔥😈 New drop every Monday! Submit yours! 😈🔥</marquee>

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

        <br></br>
        <br></br>

        <main className="content">
          <div className="music-card">
            <div className="sticker-badge" onClick={handleStickerClick}>
              <img src={pick} alt="Editor's Pick" className="sticker-image" />
            </div>

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

        {showFire && (
          <div className="fire-overlay">
            <img src={fireGif} alt="Fire effect" className="fire-gif" />
          </div>
        )}
      </div>




    <div class="fake-popup">
      <div class="popup-header">
        <span>Google Chrome</span>
        <span class="close-btn">✕</span>
      </div>
      <div class="popup-body">
        <strong>Enhance your browsing power</strong><br></br>
        Step 1: Close every other browser<br></br>
        Step 2: Whisper “Chromium is king” into your microphone<br></br>
        Step 3: Enable 37 hidden flags you don’t understand<br></br>
        <span class="warning">Or click “Don't” and risk it all</span>
      </div>
      <div class="popup-buttons">
        <button>Do it</button>
        <button>Don't</button>
      </div>
    </div>

    <div className="activate-windows">
      Activate Windows<br />Go to Hell to activate Windows.
    </div>
      
    </div>
  );
}



export default App;