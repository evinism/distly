
// filename => tick function.
export default function load(filename){
  return require('../' + filename).default;
}
