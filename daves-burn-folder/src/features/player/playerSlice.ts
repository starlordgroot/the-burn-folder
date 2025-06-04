import { createSelector, createSlice } from '@reduxjs/toolkit';

interface File {
  path: string;
  name: string;
  duration: number;
}

const playlist: File[] = [
  {
    name: "DJ Mike Llama - Llama Whippin' Intro",
    path: '/songs/llama.mp3',
    duration: 5,
  },
  {
    name: 'Jay Z - 99 Problems',
    path: '/songs/jay-z_99-problems.mp3',
    duration: 234,
  },
  {
    name: 'Eminem & Dido — Stan',
    path: '/songs/eminem_stan.mp3',
    duration: 404,
  },
  {
    name: '50 Cent - In Da Club',
    path: '/songs/50-cent_in-da-club.mp3',
    duration: 193,
  },
  {
    name: 'Radiohead - Everything In Its Right Place',
    path: '/songs/radiohead_everything-in-its-right-place.mp3',
    duration: 251,
  },
  {
    name: 'Kanye West - Gold Digger',
    path: '/songs/kanye-west_gold-digger.mp3',
    duration: 207,
  },
  {
    name: 'Franz Ferdinand - Take Me Out',
    path: '/songs/franz-ferdinand_take-me-out.mp3',
    duration: 237,
  },
  {
    name: 'U2 — Moment Of Surrender',
    path: '/songs/u2_moment-of-surrender.mp3',
    duration: 444,
  },
  {
    name: 'Gorillaz - Clint Eastwood',
    path: '/songs/gorillaz_clint-eastwood.mp3',
    duration: 339,
  },
  {
    name: 'Britney Spears - Toxic',
    path: '/songs/britney-spears_toxic.mp3',
    duration: 245,
  },
  {
    name: 'Green Day - American Idiot',
    path: '/songs/green-day_american-idiot.mp3',
    duration: 174,
  },
  {
    name: 'Lady Gaga - Poker Face',
    path: '/songs/lady-gaga_poker-face.mp3',
    duration: 207,
  },
  {
    name: 'P!nk - Get The Party Started',
    path: '/songs/pink_get-the-party-started.mp3',
    duration: 191,
  },
  {
    name: 'Madonna - Hung Up',
    path: '/songs/madonna_hung-up.mp3',
    duration: 336,
  },
];

interface State {
  state: 'played' | 'stopped' | 'paused';
  showTimeLeft: boolean;
  duration: number;
  position: number;
  volume: number;
  balance: number;
  currentSongNumber: number;
  freq: number[];
  playlist: File[];
  shuffleEnabled: boolean;
  repeatEnabled: boolean;
  messageText: string;
  playlistVisible: boolean;
}

const initialState: State = {
  state: 'stopped',
  showTimeLeft: false,
  duration: 0,
  position: 0,
  volume: 0.8,
  balance: 0,
  currentSongNumber: 0,
  freq: [],
  playlist,
  repeatEnabled: false,
  shuffleEnabled: false,
  messageText: '',
  playlistVisible: true,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state) => {
      if (state.state === 'played') {
        state.position = 0;
      } else {
        state.state = 'played';
      }
    },
    stop: (state) => {
      state.state = 'stopped';
      state.position = 0;
      state.freq = [];
    },
    pause: (state) => {
      state.state = state.state === 'paused' ? 'played' : 'paused';
    },
    durationChanged: (state, action) => {
      state.duration = action.payload;
    },
    positionChanged: (state, action) => {
      state.position = action.payload;
    },
    showTimeLeftToggled: (state) => {
      state.showTimeLeft = !state.showTimeLeft;
    },
    volumeChanged: (state, action) => {
      state.volume = action.payload;
      if (state.messageText.startsWith('VOLUME')) {
        state.messageText = `VOLUME: ${Math.floor(state.volume * 100)}%`;
      }
    },
    balanceChanged: (state, action) => {
      state.balance = action.payload;
      if (state.messageText.startsWith('BALANCE')) {
        const value = Math.floor(state.balance);
        let balanceText = 'CENTER';
        if (value < 0) balanceText = `${-value}% LEFT`;
        if (value > 0) balanceText = `${value}% RIGHT`;
        state.messageText = `BALANCE: ${balanceText}`;
      }
    },
    freqChanged: (state, action) => {
      state.freq = state.state !== 'stopped' ? action.payload : [];
    },
    nextSong: (state, action) => {
      const next = getNextSong(
        state.playlist,
        state.currentSongNumber,
        state.shuffleEnabled,
        state.repeatEnabled,
        action.payload
      );
      if (next === undefined) {
        state.state = 'stopped';
      } else {
        state.currentSongNumber = next;
      }
    },
    currentSongChanged: (state, action) => {
      state.currentSongNumber = action.payload;
    },
    shuffleEnabledChanged: (state, action) => {
      state.shuffleEnabled = action.payload;
    },
    repeatEnabledChanged: (state, action) => {
      state.repeatEnabled = action.payload;
    },
    messageTextChanged: (state, action) => {
      state.messageText = action.payload;
    },
    playlistVisibleChanged: (state, action) => {
      state.playlistVisible = action.payload;
    },
  },
});

export const {
  play,
  stop,
  pause,
  positionChanged,
  showTimeLeftToggled,
  volumeChanged,
  balanceChanged,
  durationChanged,
  freqChanged,
  nextSong,
  currentSongChanged,
  shuffleEnabledChanged,
  repeatEnabledChanged,
  messageTextChanged,
  playlistVisibleChanged,
} = playerSlice.actions;

// SELECTORS (use correct state slice key: 'player')
export const selectApp = (state: { player: State }) => state.player;
export const selectState = createSelector([selectApp], (s) => s.state);
export const selectDuration = createSelector([selectApp], (s) => s.duration);
export const selectPosition = createSelector([selectApp], (s) => s.position);
export const selectVolume = createSelector([selectApp], (s) => s.volume);
export const selectBalance = createSelector([selectApp], (s) => s.balance);
export const selectShowTimeLeft = createSelector([selectApp], (s) => s.showTimeLeft);
export const selectCurrentSongNumber = createSelector([selectApp], (s) => s.currentSongNumber);
export const selectPlaylist = createSelector([selectApp], (s) => s.playlist);
export const selectCurrentSong = createSelector(
  [selectPlaylist, selectCurrentSongNumber],
  (playlist, currentSongNumber) => playlist[currentSongNumber]
);
export const selectTotalDuration = createSelector([selectPlaylist], (pl) =>
  pl.reduce((acc, file) => acc + file.duration, 0)
);
export const selectFreq = createSelector([selectApp], (s) => s.freq);
export const selectShuffleEnabled = createSelector([selectApp], (s) => s.shuffleEnabled);
export const selectRepeatEnabled = createSelector([selectApp], (s) => s.repeatEnabled);
export const selectMessageText = createSelector([selectApp], (s) => s.messageText);
export const selectPlaylistVisible = createSelector([selectApp], (s) => s.playlistVisible);

// Get next song helper
function getNextSong(
  playlist: File[],
  current: number,
  shuffle: boolean,
  repeat: boolean,
  increment: 1 | -1
) {
  if (playlist.length === 1) return repeat ? 0 : undefined;

  if (shuffle) {
    let next = current;
    while (next === current) next = Math.floor(Math.random() * playlist.length);
    return next;
  }

  const next = current + increment;
  if (next >= 0 && next < playlist.length) return next;

  return repeat ? (increment > 0 ? 0 : playlist.length - 1) : undefined;
}

export default playerSlice.reducer;