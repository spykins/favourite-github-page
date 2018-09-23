export default class RepositoryModel {
    constructor(build) {
        this._name = build.name;
        this._owner = build.owner;
        this._url = build.url;
        this._language = build.language;
        this._id = build.id;
        this._tag = build.tag;
    }

    getName() {
        return this._name;
    }

    getUrl() {
        return this._url;
    }

    getId() {
        return this._id;
    }

    getTag() {
        return this._tag;
    }

    getLanguage() {
        return this._language;
    }

    getOwner() {
        return this._owner;
    }

    getDisplayName() {
        return `${this._owner}/${this._name}`;
    }

    addToFavourite(favouriteSet) {
        favouriteSet.add(this._id);
    }

    isSavedAsFavourite(favouriteSet) {
        return favouriteSet.has(this._id);
    }

    toString() {
        return `name: ${this.getName()}, url: ${this.getUrl()}, tag: ${this.getTag()}, language: ${this.getLanguage()}, id: ${this.getId()}`
    }

    static get Builder() {
        class Builder {
           constructor(name) {
              this.name = name;
           }
           withOwner(owner) {
              this.owner = owner;
              return this;
           }
           withUrl(url) {
              this.url = url;
              return this;
           }

           withLanguage(language) {
               this.language = language;
               return this;
           }

           withId(id) {
               this.id = id;
               return this;
           }

           withTag(tag) {
               this.tag = tag;
               return this;
           }

           build() {
              return new RepositoryModel(this);
           }
        }
        
        return Builder;
     }
}