import {
    ADD_REPOSITORY_TO_FAVOURITE_CLICKED,
    REMOVE_FROM_FAVOURITE_CLICKED,
    ON_TEXT_REMOVED,
    ON_NEW_REPOSITORY_FETCHED,
    ON_FAVOURITE_IS_MORE_THAN_ONE,
    ON_SEARCH_BUTTON_CLICKED,
    SET_TEXT_TO_SEARCH_TO_EMPTY_STRING,

} from '../util/SearchViewConstants'


let defaultState = {
    repositories: [],
    textToSearchRepo: "",
    favouriteRepositories: {},
    hasSearchTextBeenRemoved: false,
    hasSearchedButtonBeenClicked: false,
    onRemovedFromFavouriteClickes: {},
    onAddToFavouriteClicked: {}
}


export default (state = defaultState, action) => {

    switch (action.type) {

        case ADD_REPOSITORY_TO_FAVOURITE_CLICKED:
        console.log (ADD_REPOSITORY_TO_FAVOURITE_CLICKED);
        console.log ("id: ", action.id, " and the repository ", action.repository.toString());

        return {
            ...state,
            favouriteRepositories: {
                ...state.favouriteRepositories,
                [action.id]: action.repository,
            }

        }
        case REMOVE_FROM_FAVOURITE_CLICKED: 

            console.log (REMOVE_FROM_FAVOURITE_CLICKED);
            return state;
        case ON_TEXT_REMOVED:
            console.log(ON_TEXT_REMOVED);
            return state;
        case ON_NEW_REPOSITORY_FETCHED: 
            console.log(ON_NEW_REPOSITORY_FETCHED);
            return state;
        case ON_FAVOURITE_IS_MORE_THAN_ONE:
            console.log(ON_FAVOURITE_IS_MORE_THAN_ONE);
            return state;
        case ON_SEARCH_BUTTON_CLICKED:
            return { 
                ...state,
                textToSearchRepo: action.text
            };
        case SET_TEXT_TO_SEARCH_TO_EMPTY_STRING:
            return {
                ...state,
                textToSearchRepo: ""
            }
        default:
            return state;

    }

}