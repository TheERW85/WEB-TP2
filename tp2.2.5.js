/**
 * @author Erwan LAUNAY
 */
'use strict';

const albums_from_json= require('./albums.json');

function Album(data){
    Object.assign(this, data);
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

let paires = Object.entries(albums_from_json);

/* Question 2 */
paires = paires.map(a => {
    return [a[0], new Album(a[1])];
});

/* Question 3 */
paires = paires.map(a => {
    let obj = {};
    obj[a[0]] = a[1];
    return obj;
});

/* Question 4*/
let albums = Object.assign.apply(null, paires);

console.log(albums);