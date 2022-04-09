let musics = [
    { title: 'Cavemen of the Future', artist: 'Joel Cummins, Andy Farag', src: 'songs/Cavemen of the Future - Joel Cummins, Andy Farag.mp3', img:'img/Cavemen of the Future.jpg'},
    { title: 'Bite Me', artist: 'NEFFEX', src: 'songs/Bite Me (Instrumental) - NEFFEX.mp3', img:'img/Bite Me.jpg'},
    { title: 'BSC State of Mind', artist: 'Squadda B', src: 'songs/BSC State of Mind - Squadda B.mp3', img:'img/BSC State of Mind.jpg'},
    { title: 'Dont Let Me Down', artist: 'NEFFEX', src: 'songs/Dont Wanna Let Myself Down (Instrumental) - NEFFEX.mp3', img:'img/Dont Wanna Let Myself Down.jpg'},
    { title: 'Early Oceans', artist: 'Freedom Trail Studio', src: 'songs/Early Oceans - Freedom Trail Studio.mp3', img:'img/Early Oceans.jpg'},
    { title: 'Feelings', artist: 'NEFFEX', src: 'songs/Hows It Supposed to Feel (Instrumental) - NEFFEX.mp3', img:'img/Hows It Supposed to Feel.jpg'},
    { title: 'Worth It', artist: 'NEFFEX', src: 'songs/Its Only Worth It if You Work for It (Instrumental) - NEFFEX.mp3', img:'img/Its Only Worth It if You Work for It.jpg'},
    { title: 'Sailing', artist: 'Telecasted', src: 'songs/Sailing - Telecasted.mp3', img:'img/Sailing.jpg'},
    { title: 'Tell Me That I Cant', artist: 'NEFFEX', src: 'songs/Tell Me That I Cant - NEFFEX.mp3', img:'img/Tell Me That I Cant.jpg'},
    { title: 'Thunder', artist: 'Telecasted', src: 'songs/Thunder - Telecasted.mp3', img:'img/Thunder.jpg'},
    { title: 'Cavemen of the Future', artist: 'Joel Cummins, Andy Farag', src: 'songs/Cavemen of the Future - Joel Cummins, Andy Farag.mp3', img:'img/Cavemen of the Future.jpg'},
];

let music = document.querySelector('audio');
let indexMusic = 0;
let image = document.querySelector('.cover');
let title = document.querySelector('.title');
let artist = document.querySelector('.artist');
let durantionMusic = document.querySelector('.end')

renderMusic(indexMusic);

document.querySelector('.btn-play').addEventListener('click', playMusic);
document.querySelector('.btn-pause').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', updateBar);

document.querySelector('.previous').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0){
        indexMusic = musics.length;
    }
    renderMusic(indexMusic);
});

document.querySelector('.next').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > musics.length){
        indexMusic = 0;
    }
    renderMusic(indexMusic);
});

function renderMusic(index){
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        title.textContent = musics[index].title;
        artist.textContent = musics[index].artist;
        image.src = musics[index].img;
        durantionMusic.textContent = secondsMinutes(Math.floor(music.duration - music.currentTime));
        document.querySelector('.btn-pause').style.display = 'none';
        document.querySelector('.btn-play').style.display = 'block';
    });
}

function playMusic() {
    music.play();
    document.querySelector('.btn-pause').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none';
}

function pauseMusic() {
    music.pause();
    document.querySelector('.btn-pause').style.display = 'none';
    document.querySelector('.btn-play').style.display = 'block';
}

function updateBar() {
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let time = document.querySelector('.start');
    time.textContent = secondsMinutes(Math.floor(music.currentTime));
    let durantionMusic = document.querySelector('.end')
    durantionMusic.textContent = '-' +secondsMinutes(Math.floor(music.duration - music.currentTime));
    
}

function secondsMinutes(seconds){
    let minutesLabel = Math.floor(seconds / 60);
    let secondsLabel =seconds % 60;
    if(secondsLabel < 10){
        secondsLabel = '0' + secondsLabel;
    }
    return minutesLabel+ ':' + secondsLabel;
}

