function callback(param) {
    return param.toUpperCase();
}
const uppercase = (str, callback) => {
    return callback(str);
};

// console.log(uppercase('a', callback))

module.exports  = { uppercase, callback };