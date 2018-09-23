import React from 'react';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';
import RepositoryListItem from './repositoryListItem'

/**
 * @param {*} props maps state.favouriteRepositories to favouriteRepositories
 * which fetch the favourite repositories in the state
 * @see RepositoryFavouriteList renders list of 
 * @requires ./repositoryListItem  
 * @author Akinsanmi Waleola
 */
const RepositoryFavouriteList = (props) => {
    let listOfItems = [];

    if (props.favouriteRepositories && Object.keys(props.favouriteRepositories).length > 1) {
        for (let key in props.favouriteRepositories) {
            let repository = props.favouriteRepositories[key];
            let item = <RepositoryListItem
                isFavourite={true}
                isOnFavouriteList={true}
                key={repository.getId()}
                id={repository.getId()}
                url={repository.getUrl()}
                name={repository.getName()}
                owner={repository.getOwner()}
                displayName={repository.getDisplayName()}
                tag={repository.getTag()}
                language={repository.getLanguage()} />

            listOfItems.push(item);
        }
    }


    return (
        <Table responsive className="table-header table-borderless">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Language</th>
                    <th>Latest tag</th>
                </tr>
            </thead>
            <tbody>
                {listOfItems}

            </tbody>
        </Table>
    )

}

/**
 * 
 * @param {*} state from the store 
 * 
 */
let mapStateToProps = (state) => {
    return {
        favouriteRepositories: state.favouriteRepositories,
    }
}

export default connect(mapStateToProps)(RepositoryFavouriteList);