import React, { Component } from 'react';
import { Jumbotron, Col, Row, FormGroup, Button, FormControl } from 'react-bootstrap';
import logo from './logo.svg';
import Header from './components/Header';
import SearchRepo from './components/search_repo'
import './App.css';
import ListItem from './components/listItem'


class App extends Component {
 
  componentWillMount() {
    fetch("https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc")
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });

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
