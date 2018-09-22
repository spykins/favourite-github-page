//name ====> item.name
//owner ===> item.owner.login

//fullName has the required format already, decided to create my own string because that was what was specified

//url ====> item.html_url


export default class RepositoryModel {
    constructor(repository) {
        this._name = repository.name;
        this._owner = repository.owner.login;
        this._url = repository.html_url;
        this._language = repository.language;
        this._id = repository.node_id;
        this._tag = repository.tag;
    }

    getName() {
        return `${this._owner}/${this._name}`;
    }

    getUrl() {
        return this._url;
    }

    getTag() {
        return this._tag;
    }

    getLanguage() {
        return this._language;
    }

    addToFavourite(favouriteSet) {
        favouriteSet.add(this._id);
    }

    isSavedAsFavourite(favouriteSet) {
        return favouriteSet.has(this._id);
    }

    toString() {
        return `name: ${this.getName()}, url: ${this.getUrl()}, tag: ${this.getTag()}, language: ${this.getLanguage()} `
    }
}