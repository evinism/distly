import loader from './loader';
import namer from 'project-name-generator';

export default class Node {

  // TODO: Convert read/write FIFOs into full message passing things of shape
  // {src, dest, msg}
  constructor(id = namer().dashed){
    this.readArr = [];
    this.writeArr = [];
    const self = this;

    // Internal RW funcs (fifos for model)
    function readInternal(){
      if(self.readArr.length > 0){
        return [{src: 'tester', msg: self.readArr.shift()}];
      }
      return [];
    }

    function writeInternal({dest, msg}){
      self.writeArr.push(msg);
    }

    const Tick = loader('sample_src.js');
    this.id = id;
    this.ticker = Tick({id, read: readInternal, write: writeInternal});
    this.ticker.next();
  }

  tick(td){
    this.ticker.next({td});
  }

  // FIFO message passing functions.
  write(msg){
    this.readArr.push(msg);
  }

  read(){
    if(this.writeArr.length > 0){
      return [{src: this.id, msg: this.writeArr.shift()}];
    }
    return [];
  }
};
