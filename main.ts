import { Point } from './point';
// let msg: string;
// msg = 'abc';
// let chk = (<string>msg).endsWith('c');
// let anotherChk = (msg as string).endsWith('c');
// console.log(anotherChk);
// let fun = (radius) => console.log(`radius is:  ${radius}`);
// fun(5);

let point = new Point();
point.X = 1;
let temp = point.X;
point.draw();