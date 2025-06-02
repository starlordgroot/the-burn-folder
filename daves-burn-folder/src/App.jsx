import './App.css'
import logo from './assets/logo.png'
import cover from './assets/album-art.png'

function App() {
  return (
    <div className="app">
      <img src={logo} alt="Dave's Burn Folder logo" className="logo" />
      <p className="tagline">Song of the "week":</p>

      <div className="music-card">
        <img src={cover} alt="Album cover" />
        <div className="song-info">
          <h2>Jumper</h2>
          <p>Third Eye Blind</p>
          <span className="tag">🔥 Emotional</span>
        </div>
      </div>
      <div className="player-bar">
  <div className="track-name">🎵 Now Playing: Jumper - Third Eye Blind</div>
  <div className="progress-bar">
    <div className="progress" style={{ width: '35%' }}></div>
  </div>
</div>
    </div>
  )
}

export default App