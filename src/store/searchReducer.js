import {
    ADD_REPOSITORY_TO_FAVOURITE_CLICKED,
    REMOVE_FROM_FAVOURITE_CLICKED,
    SEARCH_BUTTON_CLICKED,
    ON_TEXT_REMOVED,
    ON_NEW_REPOSITORY_FETCHED,
    ON_FAVOURITE_IS_MORE_THAN_ONE,
    ON_SEARCH_BUTTON_CLICKED

} from '../util/SearchViewConstants'


let defaultState = {
    repositories: [],
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
        return {
            ...state,
            favouriteRepositories: {
                ...state.favouriteRepositories,
            }

        }
        case REMOVE_FROM_FAVOURITE_CLICKED: 

            console.log (REMOVE_FROM_FAVOURITE_CLICKED);
            return state;
        case SEARCH_BUTTON_CLICKED:
            console.log(SEARCH_BUTTON_CLICKED);
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
            console.log(ON_SEARCH_BUTTON_CLICKED);
            return state;
        default:
            return state;

    }

}