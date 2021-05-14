const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    searchAll() {
      const items = FighterRepository.getAll();
      if(!items){
        return null;
      }
      return items;
    }

    search(search) {
        const item = FighterRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    createNewFighter(data){
      const item = FighterRepository.create(data);
      if(!item){
        return null;
      }
      return item
    }

    updateFighter(id, dataToUpdate){
      const item = FighterRepository.update(id, dataToUpdate);
      if(!item){
        return null;
      }
      return item;
    }

    deletedFighter(id){
      const item = FighterRepository.delete(id);
      if(!item){
        return null;
      }
      return item;
    }
}

module.exports = new FighterService();
