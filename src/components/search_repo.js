import React, {Component} from 'react';
import {FormControl, Button} from 'react-bootstrap';


export default class SearchRepo extends Component {
    state = {
        value: ""
      }
    

      handleChange = (event) => {
        this.setState(() => ( {value: event.target.value} ));
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
              <Button type="submit" bsStyle="primary">Search</Button>
            </div>

          </form>
          );
    }
}