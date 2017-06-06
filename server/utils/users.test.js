const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'a',
      room: 'b'
    }, {
      id: '2',
      name: 'c',
      room: 'd'
    }, {
      id: '3',
      name: 'e',
      room: 'b'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'a',
      room: 'b'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser('1');
    expect(user.id).toBe('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user with invalid id', () => {
    var user = users.removeUser('4');
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser('1');
    expect(user.id).toBe('1');
  });

  it('should not find user with invalid id', () => {
    var user = users.getUser('4');
    expect(user).toNotExist();
  });

  it('should return names for room b', () => {
    var userList = users.getUserList('b');
    expect(userList).toEqual(['a', 'e']);
  });

  it('should return names for room d', () => {
    var userList = users.getUserList('d');
    expect(userList).toEqual(['c']);
  });
});
