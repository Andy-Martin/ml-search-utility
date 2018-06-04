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

function AttributeNameBox(props) {
  if (!props.attributeName) {
    return null;
  }

  return (
    <div className="attributeNameInput">
      <label>
          Attribute:
            <input
              name="attribute-name"
              type="text"
               />
        </label>
       
    </div>
  );
}

function AttributeValueBox(props) {
  if (!props.attributeValue) {
    return null;
  }

  return (
    <div className="AttributeValueInput">
      <label>
          Attribute Value:
            <input
              name="Attribute-value-name"
              type="text"
               />
        </label>
    </div>
  );
}

function SiteSelector(props) {

  return (
    <div className="siteSelector">
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


class Page extends React.Component {
  constructor(props) {
    super(props);
    
// These are the default states of our things
    this.state = {
      showElementValue: false,
      showAttribute: false,
      showAttributeValue: false,
      selectedOption: 'count'
    };
  // These bind changes to things
    this.handleToggleElementValue = this.handleToggleElementValue.bind(this);
    this.handleToggleAttributeName = this.handleToggleAttributeName.bind(this);
    this.handleToggleAttributeValue = this.handleToggleAttributeValue.bind(this);
    this.handleReturnValue = this.handleReturnValue.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


// These are our event handlers

  handleToggleElementValue() {
    this.setState(prevState => ({
      showElementValue: !prevState.showElementValue
    }));
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
    alert(`You chose the ${this.state.selectedOption} return value`);
  }



  render() {
    return (
<div>
      <header className="App-header">

          <h1 className="App-title">ML-Search-Utility</h1>
        </header>
       
        <h2> Example xml</h2>
          This is a how our xml looks with the names of the <i>things</i> written in their place:
     
    <p>
     <code>&lt;Element Attribute="Attribute Value"&gt;Element Value&lt;Element&gt; </code>
    </p>
        <h2> Search</h2>
        <p> Which platforms do you wish to search?</p>
        <form>
        <SiteSelector />
        
        <p> Create your search statement(s) </p>

<label>
        Element:
        <ElementSuggestions />
      </label>
    


        <button onClick={this.handleToggleElementValue}>
          {this.state.showElementValue ? 'Remove Element Value' : 'Add Element Value'}
        </button>
        <ElementValueBox elementValue={this.state.showElementValue} />
      
      <button onClick={this.handleToggleAttributeName}>
        {this.state.showAttribute ? 'Remove Attribute' : 'Add Attribute'}
        </button>
        <AttributeNameBox attributeName={this.state.showAttribute} />
 
      <button onClick={this.handleToggleAttributeValue}>
        {this.state.showAttributeValue ? 'Remove Attribute Value' : 'Add Attribute Value'}
        </button>
        <AttributeValueBox attributeValue={this.state.showAttributeValue} />
      
    

{
  // none of this works yet
}
              <h2>Return</h2>
                 <div className="radio">
      <label>
        <input type="radio" value="count" 
                      checked={this.state.selectedOption === "count"} 
                      onChange={this.handleReturnValue} />
        Count
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="doi" 
                      checked={this.state.selectedOption === "doi"} 
                      onChange={this.handleReturnValue} />
        DOI
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="xml" 
                      checked={this.state.selectedOption === "xml"} 
                      onChange={this.handleReturnValue} />
        XML
      </label>
    </div>
        <div className="radio">
      <label>
        <input type="radio" value="nodes" 
                      checked={this.state.selectedOption === "nodes"} 
                      onChange={this.handleReturnValue} />
        Specific Node(s)
      </label>
    </div>
    <button className="btn btn-default" type="submit" onClick={this.handleFormSubmit} >Submit</button>
</form>

</div>
    );
  }
}

export default Page;
