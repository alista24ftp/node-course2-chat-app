var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var message = generateMessage('a', 'b');
    expect(message.from).toBe('a');
    expect(message.text).toBe('b');
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'a';
    var url = 'https://www.google.com/maps?q=1,2';
    var locationMessage = generateLocationMessage(from, 1, 2);
    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({from, url});
  });
});
