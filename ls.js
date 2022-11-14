const fs = require('fs');


// module.exports = process.stdin.on("data", (data) => {
//     const cmd = data.toString().trim();
//     if(cmd === "ls"){
//         fs.readdir('./', 'utf8', (err, files) => {
//             if(err) {
//                 throw err;
//             } else {
//                 process.stdout.write(files.join('\n'));
//                 process.stdout.write('\nprompt > ')
//             } 
//         })
//     }
// });
module.exports = (done) => {
    fs.readdir('./', 'utf8', (err,files) => {
        if(err){
            done(err.stack);
        } else {
            done(files.join('\n'))
        }
    })
}
