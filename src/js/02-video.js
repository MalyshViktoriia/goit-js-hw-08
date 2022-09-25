import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);



const onPlay = function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentLocalData = localStorage.getItem('videoplayer-current-time');

if (currentLocalData) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
};
