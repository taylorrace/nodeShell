const fs = require('fs');
// const ls = require('./ls');

// module.exports = process.stdin.on("data", (data) => {
//     const input = data.toString().trim();
//     const split = input.split(' ');
//     if(split[0] === "cat"){
//         fs.readFile(split[1], 'utf8', (err, files) => {
//             if(err) {
//                 throw err;
//             } else {
//                 process.stdout.write(files);
//             } 
//         })
//     }
// });

module.exports = (fileName, done) => {
    fs.readFile(fileName, 'utf8', (err, files) => {
        if(err) {
            done(err.stack);
        } else {
            done(files)
        }
    })
};