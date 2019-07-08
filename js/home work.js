var array = [1, 5, 'bar', undefined, 6, 1, 'bar', undefined, 7, 6];

function onlyUnique(a, b, c) { 
    return c.indexOf(a) === b;
}

var unique = array.filter( onlyUnique );

console.log(unique);



