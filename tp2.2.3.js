/**
 * @author Erwan LAUNAY
 */
'use strict';

const fs = require('fs');

const albums = {
    'Fresh Cream': {
        artist: 'Cream',
        year: 1966,
        title: 'Fresh Cream',
    },
    'Hot Rats': {
        artist: 'Frank Zappa',
        year: 1969,
        title: 'Hot Rats',
    },
    'Space Oddity': {
        artist: 'David Bowie',
        year: 1969,
        title: 'Space Oddity',
    },
    'Merry Christmas': {
        artist: 'Mariah Carey',
        year: 1994,
        title: 'Merry Christmas',
    },
    'Songs from a Room': {
        artist: 'Leonard Cohen',
        year: 1969,
        title: 'Songs from a Room',
    },
    'Ummagumma': {
        artist: 'Pink Floyd',
        year: 1969,
        title: 'Ummagumma',
    },
    'Camembert Électrique': {
        artist: 'Gong',
        year: 1971,
        title: 'Camembert Électrique',
    },
    'The Piper at the Gates of Dawn': {
        artist: 'Pink Floyd',
        year: 1967,
        title: 'The Piper at the Gates of Dawn',
    },
};

fs.writeFileSync('albums.json', JSON.stringify(albums));

let albums_loaded = require('./albums.json');

console.log(albums_loaded['Fresh Cream']);