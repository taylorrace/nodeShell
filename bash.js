// const pwd = require('./pwd')
// const ls = require('./ls')
// const cat = require('./cat')
// process.stdout.write('prompt > ')

// const done = (output) => {
//     process.stdout.write(output);
//     process.stdout.write('prompt > ');
// }

// module.exports = done;

const prompt = (data) => {
    console.log(data);
    process.stdout.write('> ');
  };
  
  const main = (data) => {
    const entry = data.toString().trim();
    const [command, arg] = entry.split(' ');
    switch (command) {
      case 'pwd':
        require('./pwd')(prompt);
        break;
      case 'ls':
        require('./ls')(prompt);
        break;
      case 'cat':
        require('./cat')(arg, prompt);
        break;
      case 'curl':
        require('./curl')(arg, prompt);
        break;
      default:
        prompt('not found');
    }
  };
  
  // stdin 'data' event fires after a user types in a line. so every time the user types in a line, my main function above will run.
  prompt('Welcome to Node Shell!');
  process.stdin.on('data', main);