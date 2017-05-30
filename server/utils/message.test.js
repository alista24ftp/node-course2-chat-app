var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'a';
    var text = 'b';
    var message = generateMessage(from, text);
    expect(message.from).toBe('a');
    expect(message.text).toBe('b');
    expect(message.createdAt).toBeA('number');
  });
});
