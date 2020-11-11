const moveResult = require('../model');

describe('move results', () => {
  it('Frodo get kill by orc', () => {
    expect(moveResult(['e', 'e', 'e'])).toBe('an Orc has Capture Frodo, Fall to despair');
  });
  it('preciussss has finally return to us, GOLLUM GOLLUM', () => {
    expect(moveResult(['w'])).toBe('You Have left the borders of mordor without destrying the ring');
  });
  it('Frodo has destroyed the ring, send the eagles', () => {
    expect(moveResult(['e', 'e', 'n', 'e', 'e', 'n', 'e', 'e', 'n', 'n', 'e'])).toBe('You DID IT, YOU HELPED FRODO DESTROY THE RING AND FREE MIDDLE EARTH');
  });
  it('frodo is lost', () => {
    expect(moveResult(['s'])).toBe('Frodo Remains lost in the darkness of mordor');
  });
});
