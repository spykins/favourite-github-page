import {
    ADD_REPOSITORY_TO_FAVOURITE_CLICKED,
    REMOVE_FROM_FAVOURITE_CLICKED,
    ON_TEXT_REMOVED,
    ON_SEARCH_BUTTON_CLICKED,

} from '../util/SearchViewConstants'


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


export default (state = defaultState, action) => {

    switch (action.type) {

        case ADD_REPOSITORY_TO_FAVOURITE_CLICKED:
        return {
            ...state,
            favouriteRepositories: {
                ...state.favouriteRepositories,
                [action.id]: action.repository,
            }
        }
        case REMOVE_FROM_FAVOURITE_CLICKED: 
            let tempObject = Object.assign({}, state.favouriteRepositories)
            delete tempObject[action.id];
            return { 
                    ...state,
                    favouriteRepositories: tempObject,
                };

        case ON_TEXT_REMOVED:
            return {
                ...state,
                hasSearchTextBeenRemoved : true,
            }
        case ON_SEARCH_BUTTON_CLICKED:
            return { 
                ...state,
                textToSearchRepo: action.text,
                hasSearchTextBeenRemoved: false,
            };
        default:
            return state;
    }
}