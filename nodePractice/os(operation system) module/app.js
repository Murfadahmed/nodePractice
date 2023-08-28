const os = require('os')

console.log(os.arch());

const freeMom = os.freemem()


console.log(freeMom / 1024**3);

const total = os.totalmem()

console.log(total / 1024**3);

console.log(os.hostname());

console.log(os.type());
console.log(os.version());

console.log(os.availableParallelism());
console.log(os.networkInterfaces());