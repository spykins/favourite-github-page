import React, { Component } from 'react';
import { Jumbotron, Col, Row, FormGroup, Button, FormControl } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import ListItem from './components/listItem'


class App extends Component {
  state = {
    value: ""
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <div>
          <Jumbotron className="jumbotron">
            <p className="jumbotron-text">My Github Favourites</p>
          </Jumbotron>
        </div>
        <div className="container-fluid">
          <Row className="fav_row">
            <Col xs={12} md={6} className="topPadding">

              <form>
                <div className="formControl">
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  <Button type="submit" bsStyle="primary">Search</Button>
                </div>

                <ListItem />
              </form>
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
