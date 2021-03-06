import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import RepositoryListItem from './repositoryListItem';
import GithubFetcher from '../request/GithubFetcher';

/**
 * @class RepositoryList 
 * The datasource of the RepositoryList is from the GithubFetcher which is triggered when search is made
 * @see RepositoryList renders list of 
 * @requires ./repositoryListItem  
 * @author Akinsanmi Waleola
 */

class RepositoryList extends Component {

    constructor(props) {
        super(props);
        this.githubFetcher = new GithubFetcher();
        this.repositories = null;
    }

    state = {
        repositories: [],
        textToSearchRepo: ""
    }

    static getDerivedStateFromProps(props, state) {
        if (props.textToSearchRepo !== state.textToSearchRepo) {
            return {
                repositories: null,
                textToSearchRepo: props.textToSearchRepo,
            };
        }

        // Return null to indicate no change to state.
        return null;
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.state.repositories === null) {
            this.fetchData(this.props.textToSearchRepo);
        }
    }

    componentWillUnmount() {
        this.githubFetcher.cancelRequest()
    }

    fetchData = async (textToSearch) => {
        let repoModels = await this.githubFetcher.makeRequest(textToSearch)
        this.setState((previousState) => ({ ...previousState, repositories: repoModels }));
    }


    render() {
        let listBody = null;
        if (this.state.repositories) {
            listBody = this.state.repositories.map(repository => <RepositoryListItem
                isFavourite={this.props.isFavourite}
                isOnFavouriteList={this.props.isOnFavouriteList}
                key={repository.getId()}
                id={repository.getId()}
                url={repository.getUrl()}
                name={repository.getName()}
                owner={repository.getOwner()}
                displayName={repository.getDisplayName()}
                tag={repository.getTag()}
                language={repository.getLanguage()} />
            );
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
                    {!this.props.hasSearchTextBeenRemoved ? listBody : null}
                </tbody>
            </Table>
        );


    }
}


let mapStateToProps = (state) => {
    return {
        textToSearchRepo: state.textToSearchRepo,
        hasSearchTextBeenRemoved: state.hasSearchTextBeenRemoved,
    }
}

let mapActionToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapActionToProps)(RepositoryList);