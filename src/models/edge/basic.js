/* v1 interface
 * Should export tick*({td, data: [data]}) => [data], a stateful geneator that
 * simulates how that node responds to inputs over time. Time is in seconds.
 * Once data has been sent ONCE over the interface, it should be considered to
 * be 'sent' and the fifo on either end should take care of it.
 */

 // zero delay model
export default function* tick(){
  let data;
  while(true){
    const {td, data: newData} = yield data;
    console.log("node recieved data: " + newData);
    data = newData;
  }
};
