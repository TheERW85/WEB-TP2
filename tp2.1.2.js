/**
 * @author Erwan LAUNAY
 */
/*
1) La variable i n'est pas définie, je l'ai détecté grace a mon ide et lors de l'exectution du programme avec le message d'erreur :
ReferenceError: i is not defined
    at findMinIndex (D:\Project\WEB-TP2\tp2.1.2.js:27:12)
    at Object.<anonymous> (D:\Project\WEB-TP2\tp2.1.2.js:14:7)
*/
/*
2) Chaque variable doit etre déclaré, une manière très simple de le voir est d'utilisé elinst
 */

'use strict';
let t = [0, 3, 2, 5];
console.log('Plus petite valeur ' +
    t[findMinIndex(t, 0, t.length)]);
console.log('Plus petite valeur parmi les trois dernières ' +
    t[findMinIndex(t, 1, t.length)]);
sortTable(t);
console.log(t);

/**
 * return the index of the minimal value in the array 't' from index
 * 'from' to index 'to' (excluded)
 */
function findMinIndex(t, from, to) {
    let i; // Premiere correction
    let j = from;
    for (i = from + 1; i < to; i += 1) {
        if (t[j] > t[i]) {
            j = i;
        }
    }
    return j;
}

/**
 * sort the table 't'
 */
function sortTable(t) {
    let j, s, i;// Seconde Correction
    for (i = 0; i < t.length - 1; i += 1) {
        // Find the index of the minimal value in the unsorted part of
        // the array
        j = findMinIndex(t, i, t.length);
        // Swap the ith minimal value
        s = t[j];
        t[j] = t[i];
        t[i] = s;
    }
}

