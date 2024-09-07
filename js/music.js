const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const progress = document.getElementById('progress');
const progressBar = document.querySelector('.progress-bar');
const playlist = document.getElementById('playlist');

const songs = [
    { title: "Monster", artist: "Skillet", src: "songs/monster.mp3" },
    { title: "Comfortably Numb", artist: "Pink Floyd", src: "songs/comfortably.mp3" },
    { title: "We are the champion", artist: "Freddie Mercury", src: "songs/champions.mp3" }
];

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();

function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    updatePlaylist();
}

function updatePlaylist() {
    playlist.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.classList.toggle('active', index === currentSongIndex);
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });
        playlist.appendChild(li);
    });
}

function playSong() {
    isPlaying = true;
    audio.play();
    playBtn.textContent = '⏸';
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.textContent = '▶';
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(currentSongIndex);
    playSong();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex > songs.length - 1) {
        currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
    playSong();
}

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

progressBar.addEventListener('click', (e) => {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

audio.addEventListener('ended', nextSong);

// Inicializar o player
loadSong(currentSongIndex);
updatePlaylist();