// v1 interface
// tick*({td});

/* Functions:
{
  id: 'an id', // unique identifier
  read: () => [{src, msg}, ...], // read from internal fifo.
  write: {dest, msg} => (), // If dest is unspecified, assume a broadcast message.
}
*/

export default function* tick({id, read, write}){
  let timeSinceLastBroadcast = 0;
  let localTime = 0;
  const maxTimeBetweenBroadcasts = 100;
  while(true){
    const {td} = yield;
    const recv = read();
    // This is not statistically valid for obvious reasons.
    localTime += td;
    timeSinceLastBroadcast += td;
    if(Math.random() * maxTimeBetweenBroadcasts < timeSinceLastBroadcast){
      write({id, msg: `id ${id} broadcast localTime ${localTime}!`});
      timeSinceLastBroadcast = 0;
    }
    if(recv.length == 0){
      continue;
    }
    console.log(`id ${id} received ${recv.length} message(s): ${recv[0].msg}`);
  }
}
