//Reference http://stackoverflow.com/questions/26351326/how-do-i-generate-a-session-id-in-node-js

var crypto = require('crypto');
module.exports = genUuid;

function genUuid(callback) {
  if (typeof(callback) !== 'function') {
    return uuidFromBytes(crypto.randomBytes(16));
  }

  crypto.randomBytes(16, function(err, rnd) {
    if (err) return callback(err);
    callback(null, uuidFromBytes(rnd));
  });
}

function uuidFromBytes(rnd) {
  rnd[6] = (rnd[6] & 0x0f) | 0x40;
  rnd[8] = (rnd[8] & 0x3f) | 0x80;
  rnd = rnd.toString('hex').match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);
  rnd.shift();
  return rnd.join('-');
}