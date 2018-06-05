import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ElementSuggestions from './autosuggest.js'

function ElementValueBox(props) {
  if (!props.elementValue) {
    return null;
  }

  return (
    <div className="elementValueInput">
      <label>
          Element Value:
            <input
              name="element-value-name"
              type="text"
               />
        </label>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    
// These are the default states of our things
    this.state = {
      showElementValue: false,
          };
  // These bind changes to things
this.handleToggleElementValue = this.handleToggleElementValue.bind(this);
this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


// These are our event handlers
  //ES 6 ------------
  handleToggleElementValue() {
    this.setState(prevState => ({
      showElementValue: !prevState.showElementValue
    }));
  }

//ES 5 -----------
// handleToggleElementValue() {
// this.setState(function(prevState){
// return {showElementValue: !prevState.showElementValue};
// });
// }


handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    alert(`submitted`);
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <button type="button" onClick={this.handleToggleElementValue}>
            {this.state.showElementValue ? 'Remove Element Value' : 'Add Element Value'}
            </button>
            <ElementValueBox elementValue={this.state.showElementValue} />

            <button type="submit" >Submit</button>
        </div>
      </form>
    );
  }
}

export default App;