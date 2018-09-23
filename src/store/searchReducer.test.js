import searchReducer from './searchReducer';
import {
    ADD_REPOSITORY_TO_FAVOURITE_CLICKED,
    REMOVE_FROM_FAVOURITE_CLICKED,
    ON_TEXT_REMOVED,
    ON_SEARCH_BUTTON_CLICKED,
}
 from '../util/SearchViewConstants';

describe('search reducer', () => {
    let beforeState, id, repository
    beforeEach(() => {
        beforeState = defaultState;
        id = 1234567890;
        repository = {} 
      });


    let defaultState = {
        repositories: [],
        textToSearchRepo: "",
        favouriteRepositories: {},
        hasTextBeencleared: false,
        hasSearchTextBeenRemoved: false,
        hasSearchedButtonBeenClicked: false,
        onRemovedFromFavouriteClickes: {},
        onAddToFavouriteClicked: {}
    }
    

  it('should return initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(defaultState);
  });

  if('should add a repository to favourite', () => {
      const action = {type: ADD_REPOSITORY_TO_FAVOURITE_CLICKED, id, repository};
      const afterState = searchReducer(beforeState, action);
      expect(afterState).toEqual({...defaultState, favouriteRepositories: {[id]: repository}})
  });

  it('should remove repository from favourite', () => {
    let action = {type: ADD_REPOSITORY_TO_FAVOURITE_CLICKED, id, repository};
    let afterState = searchReducer(beforeState, action);
    expect(afterState).toEqual({...defaultState, favouriteRepositories: {[id]: repository}})
    action = {type: REMOVE_FROM_FAVOURITE_CLICKED, id};
    afterState = searchReducer(beforeState, action);
    expect(afterState).toEqual({...defaultState, favouriteRepositories: {}});
  });

  it('should set the search string ', () => {
    let text = "spykins";
    let action = {type: ON_SEARCH_BUTTON_CLICKED, text};
    let afterState = searchReducer(beforeState, action);
    expect(afterState).toEqual({...defaultState, hasSearchTextBeenRemoved: false, textToSearchRepo: text });
  });

  it("should remove the text and set flag to true", () => {
    let text = "spykins";
    let action = {type: ON_SEARCH_BUTTON_CLICKED, text};
    let afterState = searchReducer(beforeState, action);
    expect(afterState).toEqual({...defaultState, hasSearchTextBeenRemoved: false, textToSearchRepo: text });
    action = {type: ON_TEXT_REMOVED};
    afterState = searchReducer(afterState, action);
    expect(afterState).toEqual({...defaultState, hasSearchTextBeenRemoved: true, textToSearchRepo: text});

    
  });
});
