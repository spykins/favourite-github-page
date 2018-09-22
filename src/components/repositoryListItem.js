import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./repositoryListItem.css";
import {ADD_REPOSITORY_TO_FAVOURITE_CLICKED} from '../util/SearchViewConstants';
import RepositoryModel from '../util/RepositoryModel';
import {REMOVE_FROM_FAVOURITE_CLICKED} from '../util/SearchViewConstants'

class ListItem extends Component {

    handleAddButtonClicked = (event) => {
        event.preventDefault();
        let repositoryModel = new RepositoryModel.Builder(this.props.name)
                                        .withOwner(this.props.owner)
                                        .withUrl(this.props.url)
                                        .withLanguage(this.props.language)
                                        .withId(this.props.id)
                                        .withTag(this.props.tag)
                                        .build();
        this.props.sendNewFavouriteClicked(this.props.id, repositoryModel)
    }

    handleRemoveFavourite = (event) => {
        event.preventDefault();        
        this.props.sendOnFavouriteRemove(this.props.id);

    }

    render() {

        let listInformation = null;
        if (this.props.isFavourite && this.props.isOnFavouriteList) {
            listInformation = <td><a href="" onClick={this.handleRemoveFavourite}>remove</a></td>;
        } else if (!this.props.isFavourite) {
            if (!this.props.favouriteRepositories[this.props.id]) {
                listInformation = <td><a href="" onClick={this.handleAddButtonClicked}>add</a></td>;
            }
        }
        return (

            <tr>
                <th><a href={this.props.url} target="_blank" className="removeLinkColor">{this.props.displayName}</a></th>
                <th>{this.props.language}</th>
                <th>{this.props.tag}</th>
                {listInformation}
            </tr>
        );


    }

}

ListItem.propTypes = {

    isFavourite: PropTypes.bool.isRequired,
    isOnFavouriteList: PropTypes.bool.isRequired,
}

let mapStateToProps = (state) => {
    return {
        favouriteRepositories: state.favouriteRepositories,
    }
}


let mapPropsToAction = (dispatch) => {
    return {
        sendNewFavouriteClicked: (id, repository) => {
            dispatch({
                type: ADD_REPOSITORY_TO_FAVOURITE_CLICKED,
                id,
                repository
            })
        },
        sendOnFavouriteRemove: (id) => {
            dispatch({
                type: REMOVE_FROM_FAVOURITE_CLICKED,
                id
            })
        }
    }
}

export default connect(mapStateToProps, mapPropsToAction)(ListItem);