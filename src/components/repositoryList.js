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


/**
 * 
 *         return `name: ${this.getName()}, url: ${this.getUrl()}, tag: ${this.getTag()}, language: ${this.getLanguage()} `

      <th><a href={this.props.url} target="_blank">{this.props.name}</a></th>
            <th>{this.props.language}</th>
            <th>{this.props.tag}</th>
            {listInformation}
        </tr>

 */