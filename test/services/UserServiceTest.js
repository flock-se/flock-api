var assert = require('assert');

const Auth = require('../../src/Auth.js')
const UserService = require('../../src/services/UserService.js')

describe('UserService', () => {

  it('findAll', () => {
    return Auth()
      .then(client => UserService(client))
      .then(userService => {
        return userService.findAll()
      })
      .then(res => {
        assert.equal(res[1].id, '456');
        assert.equal(res[1].name, 'Maureen van der Sluis');
      })
      .catch((e) => console.error(e))

  });

  it('findById', () => {
    return Auth()
      .then(client => UserService(client))
      .then(userService => {
        return userService.findById('123')
      })
      .then(res => {
        assert.equal(res.id, '123');
        assert.equal(res.name, 'Willem Veelenturf');
      })
      .catch((e) => console.error(e))

    });

});