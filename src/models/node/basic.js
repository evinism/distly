/* v1 interface
 * should export tick*(time) => status: oneOf(['nominal', 'down', 'destroyed'])
 */

// Always on, very easy.
export function* tick(){
  yield 'nominal';
};
