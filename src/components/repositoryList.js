import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import RepositoryListItem from './repositoryListItem'
import GithubFetcher from '../request/GithubFetcher'


export default class RepositoryList extends Component {

    state = {
        repositories: []
    }


    constructor(props) {
        super(props);
        this.githubFetcher = new GithubFetcher();
    }

    componentWillUnmount() {
        this.githubFetcher.cancelRequest()
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        let repoModels = await this.githubFetcher.makeRequest("shopify")
        this.setState((previousState) => ({ ...previousState, repositories: repoModels }));
    }

    render() {
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
                            url={repository.getUrl()}
                            name={repository.getName()}
                            tag={repository.getTag()}
                            language={repository.getLanguage()}
                            isOnFavouriteList={repository.isOnFavouriteList} />)
                    }
                </tbody>
            </Table>
        );
    }
}
