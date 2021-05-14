const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

// get all users
router.get('', function (req, res, next) {
  const users = UserService.searchAll();
  try {
    if(users === null){
      throw new Error('Users are not found')
    }
    req.data = users;
  } catch (e) {
    req.err = e.message;
  } finally {
    next()
  }
}, responseMiddleware)

//get user by id
router.get('/:id', function (req, res, next) {
  const id = req.params.id;
  const user = UserService.search({id: id});

  try {
    if(user === null){
      throw new Error('User is not found')
    }
    req.data = user;
  } catch (e) {
    req.err = e.message;
  } finally {
    next()
  }
}, responseMiddleware)

// add new user
router.post('', createUserValid, function (req, res, next) {
  const newUserData = req.body;
  try {
    if(!newUserData){
      throw new Error('Something wrong while added new user')
    }
    const newUser = UserService.createNewUser(newUserData);
    req.data = newUser
  } catch (e) {
    req.err = e.message;
  } finally {
    next()
  }
}, responseMiddleware)

//update user
router.put('/:id', updateUserValid, function (req, res, next) {
  const id = req.params.id;
  const newData = req.body;
  const updatedUser = UserService.updateUser(id, newData)

  try {
    if(!id || !newData || !updatedUser){
      throw new Error('Something wrong while updating user')
    }
    req.data = updatedUser
  } catch (e) {
    req.err = e.message;
  } finally {
    next()
  }

}, responseMiddleware)

//delete user
router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  const deletedUser = UserService.delete(id)
  try {
    if(!id || !deletedUser){
      throw new Error('Something wrong while deleting user ')
    }
    req.data = deletedUser;
  } catch (e) {
    req.err = e.message
  } finally {
    next()
  }
}, responseMiddleware)

module.exports = router;
