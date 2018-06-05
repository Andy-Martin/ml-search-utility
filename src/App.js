import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ElementSuggestions from './autosuggest.js'

function ElementValueBox(props) {
  if (!props.elementValue) {
    return null;
  }

  return (
    <div className="Element-value-input">
      Element Value:
      <input name="element-value-name" type="text" value={this.state.elementValueValue} onChange={this.handleElementValueChange}/>
    </div>
  );
}

function AttributeNameBox(props) {
  if (!props.attributeName) {
    return null;
  }

  return (
    <div className="Attribute-name-input">
      Attribute:
      <input name="attribute-name" type="text" />       
    </div>
  );
}

function AttributeValueBox(props) {
  if (!props.attributeValue) {
   return null;
  }

  return (
    <div className="Attribute-value-input">
      Attribute Value:
      <input name="attribute-value-name" type="text" />
    </div>
  );
}

function SiteSelector(props) {
  return (
    <div className="Site-selector">
      <select>
        <option value="All-Sites">All Sites</option>
        <option selected value="SpringerLink">SpringerLink</option>
        <option value="BMC">BioMed Central</option>
        <option value="BSL">BSL</option>
        <option value="sprcom">Springer.com</option>
      </select> 
    </div>
  );
}


class App extends React.Component {
  constructor(props) {
    super(props);
    
// These are the default states of our things
    this.state = {
      showElementValue: false,
      showAttribute: false,
      showAttributeValue: false,
      selectedOption: 'count',
      elementValueValue: '',
    };
  // These bind changes to things
    this.handleToggleElementValue = this.handleToggleElementValue.bind(this);
    this.handleElementValueChange = this.handleElementValueChange.bind(this);
    this.handleToggleAttributeName = this.handleToggleAttributeName.bind(this);
    this.handleToggleAttributeValue = this.handleToggleAttributeValue.bind(this);
    this.handleReturnValue = this.handleReturnValue.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


// These are our event handlers
  //ES 6 ------------
  handleToggleElementValue() {
    this.setState(prevState => ({
      showElementValue: !prevState.showElementValue
    }));
  }

// This is what the same thing looks like in ES 5 -----------

// handleToggleElementValue() {
// this.setState(function(prevState){
// return {showElementValue: !prevState.showElementValue};
// });
// }

handleElementValueChange(event) {
    this.setState({value: event.target.value});
  }

  handleToggleAttributeName() {
    this.setState(prevState => ({
      showAttribute: !prevState.showAttribute
    }));
  }

  handleToggleAttributeValue() {
    this.setState(prevState => ({
      showAttributeValue: !prevState.showAttributeValue
    }));
  }

  handleReturnValue(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    alert(`You chose the ${this.state.selectedOption} for element ${this.state.value} return value`);
  }



  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">
            ML-Search-Utility
          </h1>
        </header>
        <div className="App-intro">     
          <h2> Example xml</h2>
            <p>This is a how our xml looks with the names of the <i>things</i> written in their place:</p>
             
          <div className="Xml-example">
            <code>&lt;Element Attribute="Attribute Value"&gt;Element Value&lt;Element&gt; </code>
          </div>
        </div>   

        <div className="Search-query">
          <form onSubmit={this.handleFormSubmit}>

            <h2>Search</h2>
                  
            <p>Which platforms do you wish to search?</p>

            <SiteSelector />
                  
            <p>Create your search statement(s)</p>
            
            <div className="Search-param">
              Element:
              <ElementSuggestions />
            </div>    
              
                
            <div className="Search-param">
              <button type="button" onClick={this.handleToggleElementValue}>
                {this.state.showElementValue ? 'Remove Element Value' : 'Add Element Value'}
              </button>
              <ElementValueBox elementValue={this.state.showElementValue} />
            </div>     
                
            <div className="Search-param">
              <button type="button" onClick={this.handleToggleAttributeName}>
                {this.state.showAttribute ? 'Remove Attribute' : 'Add Attribute'}
              </button>
              <AttributeNameBox attributeName={this.state.showAttribute} />
            </div>
                
            <div className="Search-param">
              <button type="button" onClick={this.handleToggleAttributeValue}>
                {this.state.showAttributeValue ? 'Remove Attribute Value' : 'Add Attribute Value'}
              </button>
              <AttributeValueBox attributeValue={this.state.showAttributeValue} />
            </div>   
              

            <h2>Return</h2>

            <div className="Return-radio">
              <input type="radio" value="count" 
                checked={this.state.selectedOption === "count"} 
                onChange={this.handleReturnValue} />
              Count  
            </div>
              
            <div className="Return-radio">
              <input type="radio" value="doi" 
                checked={this.state.selectedOption === "doi"} 
                onChange={this.handleReturnValue} />
              DOI
            </div>
              
            <div className="Return-radio">
              <input type="radio" value="xml" 
                checked={this.state.selectedOption === "xml"} 
                onChange={this.handleReturnValue} />
              XML
            </div>
                  
            <div className="Return-radio">
              <input type="radio" value="nodes" 
                checked={this.state.selectedOption === "nodes"} 
                onChange={this.handleReturnValue} />
              Specific Node(s) 
            </div>

            <div className="Submission-button">
              <button type="submit" onClick={this.handleFormSubmit} >
                Submit
              </button> 
            </div>  

          </form>
        </div>
      </div>

    );
  }
}

export default App;
