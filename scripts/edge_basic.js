import {tick} from '../src/models/edge/basic';

console.log('run basic edge simulation:');
const edge = tick();
edge.next();
let time = 0;

function sim(msg){
  console.log(`--- time ${time} ---`)
  console.log(`in: "${msg}"`);
  const response = edge.next({time, data: [msg]}).value;
  console.log(`out: [${response}]`);
  time++;
};

sim('foo');
sim('bar');
sim('baz');
