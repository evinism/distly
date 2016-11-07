import Node from '../src/node';

// Initialize node
const node = new Node();

const td = 0.125;
function sim(msg){
  if(msg){
    node.write(msg);
  }
  const recieved = (node.read())[0];
  if(recieved){
    const {src, msg} = recieved;
    console.log(`message recieved from ${src}: "${msg}"`);
  }
  node.tick(td);
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
