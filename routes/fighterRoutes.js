const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

// get all fighters
router.get('', function (req, res, next) {
  const fighters = FighterService.searchAll();
  try {
    if(fighter === null){
      throw new Error('Fighters are not found')
    }
    req.data = fighters;
  } catch (e) {
    req.err = e.message;
  } finally {
    next()
  }
}, responseMiddleware)

//get fighter by id
router.get('/:id', function (req, res, next) {
  const id = req.params.id;
  const fighter = FighterService.search({id: id});

  try {
    if(fighter === null){
      throw new Error('Fighter is not found')
    }
    req.data = fighter;
  } catch (e) {
    req.err = e.message;
  } finally {
    next()
  }
}, responseMiddleware)

// add new fighter
router.post('', createFighterValid, function (req, res, next) {
  const newFighterData = req.body;

  try {
    if(!newFighterData){
      throw new Error('Something wrong while added new fighter')
    }
    const newFighter = FighterService.createNewFighter(newFighterData);
    req.data = newFighter
  } catch (e) {
    req.err = e.message;
  } finally {
    next()
  }
}, responseMiddleware)

//update fighter
router.put('/:id', updateFighterValid, function (req, res, next) {
  const id = req.params.id;
  const newData = req.body;
  const updatedFighter = FighterService.updateFighter(id, newData)

  try {
    if(!id || !newData || !updatedFighter){
      throw new Error('Something wrong while updating fighter')
    }
    req.data = updatedFighter
  } catch (e) {
    req.err = e.message;
  } finally {
    next()
  }

}, responseMiddleware)

//delete fighter
router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  const deletedFighter = FighterService.delete(id)
  try {
    if(!id || !deletedFighter){
      throw new Error('Something wrong while deleting fighter ')
    }
    req.data = deletedFighter;
  } catch (e) {
    req.err = e.message
  } finally {
    next()
  }
}, responseMiddleware)


module.exports = router;
