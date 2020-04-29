/**
 * @author Erwan LAUNAY
 */
'use strict';
const albums_loaded = require('./albums.json');

function Artist(name){
    this.name = name;
    this.albums = [];
    Artist.list.push(this);
}
Artist.prototype.addAlbum = function (album) {
    this.albums.push(album);
};
Artist.withName = function (name) {
    return Artist.list.find((artist) => {
        return name === artist.name;
    });
};
Artist.list = [];

function Album(data){
    Object.assign(this, data);
    // On cherche si l'attiste existe déja
    let exist_artist = Artist.withName(this.artist);
    if (exist_artist === undefined)
    { // si non on le créé
        this.artist = new Artist(this.artist);
    }
    else
    { // si oui on le récupère
        this.artist = exist_artist;
    }
    this.artist.addAlbum(this);
}
Album.prototype.getTitle = function () {
    return this.title;
};
Album.prototype.getArtist = function () {
    return this.artist;
};
Album.prototype.getYear = function () {
    return this.year;
};

let pairs = Object.entries(albums_loaded);

pairs = pairs.map(a => {
    return [a[0], new Album(a[1])];
});

pairs = pairs.map(a => {
    let obj = {};
    obj[a[0]] = a[1];
    return obj;
});

let albums = Object.assign.apply(null, pairs);

console.log(albums['Fresh Cream']);