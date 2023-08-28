const chalk =  require('chalk')

console.log(chalk.red('hello world'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.blue('hello world',chalk.underline.bgBlue('world')));