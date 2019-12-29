let a = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8];

function treeSum(){
    let result = a.flat(Infinity);
    return result.reduce((sum, current) => sum + current, 0);
};
console.log (treeSum());
