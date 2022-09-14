const fs = require('fs');
var crypto = require('crypto');
var data = '';

const readstream = fs.createReadStream('myfile');
readstream.setEncoding('UTF8');

readstream.on('data', function (chunk) {
    data += chunk;
    console.log("DATA : ", data);

    var data1 = '';
    var hash = crypto.createHash('sha512');

    data1 = hash.update(data, 'utf-8');
    console.log("Hashed Data : ")
    var gen_hash = data1.digest('hex');
    console.log(gen_hash);
});




