import { tick } from '../sample_src.js';


let readArr = [];

// Set up shim functions
function read(){
  if(readArr.length > 0){
    return [{src: 'tester', msg: readArr.shift()}];
  }
  return [];
}

function write({dest, msg}){
  console.log(`message written w/ message "${msg}"`);
}

// Initialize node
const node = tick({id: 'node1', read, write});
node.next();

const td = 0.125;
function sim(msg){
  if(msg){ readArr.push(msg); }
  node.next({td});
};

// Simulate for 10 seconds
for(let i = 0; i < 100; i++){
  sim();
}
sim('This is a thingy!');
// Simulate for 10 seconds
for(let i = 0; i < 100; i++){
  sim();
}
