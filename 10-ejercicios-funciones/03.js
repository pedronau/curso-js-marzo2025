function callback(fn, ...rest) {
    console.log(rest);
}

function log(...args) {
    console.log(args);
}

callback(log, 1, 2, 3, 4);

//lo he resuelto así XDDD. me da elmismo resultado. el tio lo hace asi:

function callback2(fn, ...rest) {
    fn(...rest);
}