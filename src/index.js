/**
 * Return true if it's even, and false if it isn't.
 *
 * @param {Number} i
 */
export const isNumberEven = i => {
  return i % 2 === 0;
};

/**
 * `str` is a string, but it may not have a file extension.
 * Return the file extension (with no period) if it has one, otherwise false
 * @param {String} str
 */
export const getFileExtension = str => {
  let extension = str.split('.').pop();
  return extension === 'no extension here' ? false : extension;
};

/**
 * `arr`is a string.
 * Return the longest string in the array
 *
 * @param {String} arr
 */
export const longestString = arr => {
  return arr.reduce((a, b) => {
    if(typeof b === 'string' && b.length > a.length) {return b;}
    return a;
  }, '');
  /*
  let longestStr = 0;
  let result;
  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'string' && arr[i].length > longestStr) {
      longestStr = arr[i].length;
      result = arr[i];
    }
  }
  return result;
  */
};

/**
 * `str` is an string.
 * Return a new string who's characters are in the opposite order to str's.
 * @param {String} str
 */
export const reverseString = str => str.split('').reverse().join('');

/**
 * `str` is a string.
 * Return true if it is a palindrome and false otherwise.
 * It should be case insensitive and not consider space or punctuation.
 *
 * @param {String} str
 */
export const isPalindrome = str => {
  let leftStr = str.toLowerCase().replace(/[\W_]/g, '');
  let rightStr = reverseString(leftStr);
  return leftStr === rightStr;
};

/**
 * `arr` will be an array containing integers, strings and/or arrays like itself.
 * Return the sum all the numbers you find, anywhere in the nest of arrays.
 */
export const nestedSum = arr => {
  let result = 0;
  arr.forEach((val) => {
    if(typeof val === 'number') {result += val;}
    if(Array.isArray(val)) {result += nestedSum(val);}
  });
  return result;
};

/**
 * Retire du tableau `tab` passé en paramètre les éléments passés en
 * paramètres dans `elms`.
 *
 * On utilise la destructuration pour pouvoir utiliser tous les arguments
 * après `tab` comme un tableau.
 *
 * Après l'exécution le tableau d'origine est réellement modifié, ce
 * on ne retourne pas une copie.
 *
 * Exemple :
 * let tab = ['a', 'b', 'c', 'b', 'c'];
 * pull(tab, 'a', 'b');
 * tab; // ['c']
 *
 * @param {Array} tab
 * @param  {objects} elms
 */
export const retireDe = (tab, ...elms) => {
  for(let i = 0; i < tab.length; i++) {
    for(let e of elms) {
      if(tab[i] === e) {
        tab.splice(i, 1);
        i--;
      }
    }
  }
};

/**
 * Aplatit en profondeur un tableau passé en paramètre.
 *
 * Indications :
 * - Utiliser la récursion.
 * - Utiliser `Array.prototype.concat()` avec un tableau vide ([]) et l'opérateur de déstructuration (...) pour aplatir  un tableau.
 *
 * Exemple :
 * aplatirRecursif([5, [4], [[3], 2], [1], 0]);
 * // [5, 4, 3, 2, 1, 0]
 */
export const aplatirRecursif = tab => {
  let result = [];
  for(let val of tab) {
    if(Array.isArray(val)) {result = result.concat(aplatirRecursif(val));}
    else {result.push(val);}
  }
  return result;
};

/**
 * Retourne la liste de toutes les permutations des objets du tableau passé en paramètre.
 *
 * Exemple :
 * permutations([0,1,2]);
 * // [ [ 0, 1, 2 ],
 * //   [ 0, 2, 1 ],
 * //   [ 1, 0, 2 ],
 * //   [ 1, 2, 0 ],
 * //   [ 2, 0, 1 ],
 * //   [ 2, 1, 0 ] ]
 *
 * @param {Array} tab
 */
export const permutations = tab => {
  if (tab.length <= 2) {
    return tab.length === 2 ? [tab, [tab[1], tab[0]]] : tab;
  }
  return tab.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...tab.slice(0, i), ...tab.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

/**
 * Retourne un élément au hazard parmi les éléments du tableau `tab` passé en
 * paramètre.
 *
 * @param {Array} tab
 */
export const echantillon = tab => tab[Math.floor(Math.random() * tab.length)];

/**
 * Prend un tableau 'tab' et le transforme en string avec chaque élément séparé par le `separateur`.
 * Les deux derniers éléments sont séparé pas le séparateur `fin`.
 *
 * Exemple:
 * enumerer(['Riri', 'Fifi', 'Loulou'], ', ', ' et ');
 * // 'Riri, Fifi et Loulou'
 *
 *
 * @param {Array} tab
 * @param {string} separateur
 * @param {string} fin
 */
export const enumerer = (tab, separateur = ', ', fin = separateur) => {
  let result = tab[0];
  if(tab.length > 0) {
    for (let i = 1; i < tab.length; i++) {
      i === tab.length -  1 ? result += fin + tab[i] : result += separateur + tab[i];
    }
  }
  return result;
};

/**
 * Retourne, sous forme d'un tableau, les `n` plus grand nombres du tableau `tab` passé en paramètre.
 *
 * Attention, on ne doit pas modifier le tableau d'origine.
 *
 * Utiliser `Array.prototype.sort()`, l'opérateur de destructuration (...) et `Array.prototype.slice()`
 */
export const nMax = (tab, n = 1) => tab.filter(val => typeof val === 'number').sort((a, b) => b - a).slice(0, n);
