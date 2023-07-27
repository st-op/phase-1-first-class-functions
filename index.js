const receivesAFunction = (callback) => callback();
// function returnsANamedFunction() {
//     return receivesAFunction()
// }

function returnsANamedFunction() {
    return function hello() {}
}
function returnsAnAnonymousFunction() {
    return function () {}
}
