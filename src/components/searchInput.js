import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormControl, Button} from 'react-bootstrap';
import {ON_SEARCH_BUTTON_CLICKED, ON_TEXT_REMOVED} from '../util/SearchViewConstants'


class SearchRepo extends Component {
    state = {
        value: ""
      }
    

      handleChange = (event) => {
        this.setState({ value: event.target.value })
        if (!event.target.value) {
            this.props.onSearchTextRemoved();
        }
      }

      handleOnSearchButtonClicked = (event) => {
          event.preventDefault();
          if (this.state.value) {
              this.props.onSearchButtonClicked(this.state.value);
          }
      }

    render() {
        return ( <form>
            <div className="formControl">
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              <Button type="submit" bsStyle="primary" onClick={this.handleOnSearchButtonClicked}>Search</Button>
            </div>

          </form>
          );
    }
}

let mapStateToAction = (dispatch) => {
    return {
        onSearchButtonClicked: (text) => {
            dispatch({
                type: ON_SEARCH_BUTTON_CLICKED,
                text
            })
        },

        onSearchTextRemoved: () => {
            dispatch({
                type: ON_TEXT_REMOVED
            })
        },
    }
}

export default connect(null, mapStateToAction)(SearchRepo);