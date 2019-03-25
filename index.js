/**
 * Get object internal property [[Class]].
 * @param {any} obj 
 * @returns {string}
 */
function getClass(obj) {
    var str = Object.prototype.toString.call(obj)
    return /^\[object (.*)\]$/.exec(str)[1].toLowerCase()
}

module.exports = getClass
