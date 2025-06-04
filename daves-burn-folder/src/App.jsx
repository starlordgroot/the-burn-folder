import './App.css';
import logo from './assets/logo_3.png';
import cover from './assets/album-art.png';

function App() {
  return (
    <div className="app">
      <header className="logo-wrap">
        <img src={logo} alt="Dave's Burn Folder" className="logo" />
      </header>

      <div className="nav-bar">
        <nav className="nav-container">
          <a href="#">The Playlist</a>
          <a href="#">FAQ</a>
          <a href="#">Send in a Song</a>
          <a href="#">Contact</a>
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
        <div className="player-meta">
          🔊 Now Playing: <strong>Jumper – Third Eye Blind</strong>
        </div>
      </footer>
    </div>
  );
}

export default App;