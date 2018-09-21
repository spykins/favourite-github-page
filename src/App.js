import React, { Component } from 'react';
import { Jumbotron, Col, Row, FormGroup, Button, FormControl } from 'react-bootstrap';
import logo from './logo.svg';
import Header from './components/Header';
import SearchRepo from './components/search_repo'
import './App.css';
import ListItem from './components/listItem'
import GithubFetcher from './request/GithubFetcher';


class App extends Component {
  constructor(props) {
    super(props);
    this.githubFetcher = new GithubFetcher();
  }
 
  componentWillMount() {
    this.githubFetcher.makeRequest("tetris")
      .then(repos => {
        if (repos) {
          console.log(repos.items)
        }
      })
      .catch(error => console.log(error));



  }

  componentWillUnmount() {
    this.githubFetcher.cancelRequest()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Row className="fav_row">
            <Col xs={12} md={6} className="topPadding">
              <SearchRepo />
              <ListItem isFavourite={true} isOnFavouriteList={false} />
            </Col>

            <Col className="fav_list_background topPadding" xs={12} md={6}>
              <ListItem isFavourite={true} isOnFavouriteList={true} />

            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
