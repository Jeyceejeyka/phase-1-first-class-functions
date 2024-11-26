function receivesAFunction(callback) {
    callback(); // Calls the passed function
}
function returnsANamedFunction() {
    function namedFunction() {
        return "I am a named function!";
    }
    return namedFunction; // Returns the named function
}
function returnsAnAnonymousFunction() {
    return function () {
        return "I am an anonymous function!";
    };
}
function receivesAFunction(callback) {
    callback(); 
}

function returnsANamedFunction() {
    function namedFunction() {
        return "I am a named function!";
    }
    return namedFunction; 
}

function returnsAnAnonymousFunction() {
    return function () {
        return "I am an anonymous function!";
    };
}

