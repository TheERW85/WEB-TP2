/**
 * @author Erwan LAUNAY
 */
'use strict';

function Album(data){
    Object.assign(this, data);
}

Album.prototype.getYear = function () {
    return this.year;
};
Album.prototype.getTitle = function () {
    return this.title;
};
Album.prototype.getArtist = function () {
    return this.artist;
};

const album = new Album({
    title: 'Fresh Cream',
    artist: 'Cream',
    year: 1966,
});

console.log(album.getTitle());
console.log(album.getArtist());
console.log(album.getYear());