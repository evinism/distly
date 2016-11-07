/* v1 interface
 * should export tick*(td) => status: oneOf(['nominal', 'down', 'destroyed'])
 */

// Always on, very easy.
export default function* tick(){
  yield 'nominal';
};
