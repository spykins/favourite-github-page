import React from 'react';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';
import RepositoryListItem from './repositoryListItem'

const RepositoryFavouriteList = (props) => {
    let listOfItems = [];

    console.log("<<<>>>>>", props);
    if (props.favouriteRepositories) {
        for (let key in props.favouriteRepositories) {
            let repository = props.favouriteRepositories[key];
            console.log(repository, " oooooooooooooo");

            let item = <RepositoryListItem
                isFavourite={true}
                isOnFavouriteList={true}
                key={repository.getId()}
                id={repository.getId()}
                url={repository.getUrl()}
                name={repository.getName()}
                tag={repository.getTag()}
                language={repository.getLanguage()} />

            listOfItems.push(item);
        }
    }


    return (
        <Table responsive className="table-header">

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

let mapStateToProps = (state) => {
    return {
        favouriteRepositories: state.favouriteRepositories,
    }
}

export default connect(mapStateToProps)(RepositoryFavouriteList);