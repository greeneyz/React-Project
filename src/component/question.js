import React, {Component} from 'react';
import {Form, Text} from 'react-form';
import { tsConstructorType } from '@babel/types';
import Question2 from './question2';

class question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }
    
    handleOptionChange(changeEvent) {

        this.setState({
          selectedOption: changeEvent.target.value
        });
        console.log(this.state.selectedOption)
        return (
            <Question2 />
        );
      }

render() {    
  return (
<Form>
  
    <form>
    <div>
        <label htmlFor="">Is you b2b effective</label>
    </div>
      <div className="radio">
          <label>
            <input type="radio" value="option1"
                    checked={this.state.selectedOption === 'option1'}
                    onClick={(e) => this.handleOptionChange(e)} />
            
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2"
                    checked={this.state.selectedOption === 'option2'}
                    onChange={(e) => this.handleOptionChange(e)} />
            Option 2
          </label>
        </div>
    </form>
  
</Form>
  );
  }
}

export default question;
