import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Table } from 'react-bootstrap';
import RepositoryListItem from './repositoryListItem';
import GithubFetcher from '../request/GithubFetcher';
import {SET_TEXT_TO_SEARCH_TO_EMPTY_STRING} from '../util/SearchViewConstants';


class RepositoryList extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.githubFetcher = new GithubFetcher();
        this.repositories = null;
    }

    state = {
        repositories: [],
        textToSearchRepo:""
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

        if (this.state.repositories) {
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

                    {
                        this.state.repositories.map(repository => <RepositoryListItem
                            isFavourite={this.props.isFavourite} 
                            isOnFavouriteList={this.props.isOnFavouriteList}
                            key={repository.getId()}
                            id={repository.getId()}
                            url={repository.getUrl()}
                            name={repository.getName()}
                            tag={repository.getTag()}
                            language={repository.getLanguage()} />
                            )
                    }
                </tbody>
            </Table>
        );
        } 
        
        return <div></div>
        
    }
}


let mapStateToProps = (state) => {
    return {
        textToSearchRepo: state.textToSearchRepo,
    }
}

let mapActionToProps = (dispatch) => {
    return {
        setTextToSearchToEmptyString: () => {
            dispatch({
                type: SET_TEXT_TO_SEARCH_TO_EMPTY_STRING
            })
        }
    }
}
export default connect(mapStateToProps, mapActionToProps)(RepositoryList);