const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    searchAll() {
      const items = UserRepository.getAll();
      if(!items){
        return null;
      }
      return items;
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    createNewUser(data){
      const item = UserRepository.create(data);
      if(!item){
        return null;
      }
      return item
    }

    updateUser(id, dataToUpdate){
      const item = UserRepository.update(id, dataToUpdate);
      if(!item){
        return null;
      }
      return item;
    }

    deleteUser(id){
      const item = UserRepository.delete(id);
      if(!item){
        return null;
      }
      return item;
    }
}

module.exports = new UserService();
