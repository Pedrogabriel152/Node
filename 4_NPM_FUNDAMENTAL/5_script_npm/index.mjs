import _ from "lodash";
import chalk from "chalk";

const a = [1,2,3,4]
const b = [5,6,7,8]

const diff = _.difference(a,b)

console.log(chalk.red.bold(diff))