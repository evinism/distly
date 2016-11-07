import {tick} from '../src/models/edge/basic';

console.log('run basic edge simulation:');
const edge = tick();
edge.next();
const td = 0.125;

let time = 0;
function sim(msg){
  console.log(`--- time ${time} ---`)
  console.log(`in: "${msg}"`);
  const response = edge.next({td, data: [msg]}).value;
  console.log(`out: [${response}]`);
  time += td;
};

sim('foo');
sim('bar');
sim('baz');
