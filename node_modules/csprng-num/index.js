const { randomBytes } = require('crypto');
const { promisify } = require('util');

function Random(low = 0, high = 0){
    if(low == 0 && high == 0){
        let buf = randomBytes(4);
        let num = buf.readUInt32BE(0) / (Math.pow(2, 32) - 1);
        return num;
    }
    else {
        let buf = randomBytes(4);
        let num = buf.readUInt32BE(0) / (Math.pow(2, 32) - 1);
        return Math.floor(num * (high - low + 1) + low);
    }
}

//create async function
Random.async = async function(low = 0, high = 0){
    if(low == 0 && high == 0){
        let buf = await promisify(randomBytes)(4);
        let num = buf.readUInt32BE(0) / (Math.pow(2, 32) - 1);
        return num;
    }
    else {
        let buf = await promisify(randomBytes)(4);
        let num = buf.readUInt32BE(0) / (Math.pow(2, 32) - 1);
        return Math.floor(num * (high - low + 1) + low);
    }
}

module.exports = Random;