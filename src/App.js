import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from './components/Header';
import SearchInput from './components/searchInput'
import './App.css';
import RepositoryList from './components/repositoryList';
import RepositoryFavouriteList from './components/repositoryFavouriteList';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Row className="fav_row">
            <Col xs={12} md={6} className="topPadding">
              <SearchInput />
              <RepositoryList isFavourite={false} isOnFavouriteList={false} />
            </Col>

            <Col className="fav_list_background topPadding" xs={12} md={6}>
              <RepositoryFavouriteList isFavourite={true} isOnFavouriteList={true} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
