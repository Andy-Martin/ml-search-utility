import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchAttribute: true,
      elementName: "meta:ContentType"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">

          <h1 className="App-title">ML-Search-Utility</h1>
        </header>
        <p className="xmlExample">
        <h2> Example xml</h2>
          This is a how our xml looks with the names of the <i>things</i> written in their place:
           </p>
          <p>
                    <code>&lt;Element Attribute="Attribute Value"&gt;Element Value&lt;Element&gt; </code>
    </p>
    <div className="Search">
    <h2>Search</h2>


      <form>
      <p className="Site-Selector">
      <select>
        <option value="All-Sites">All Sites</option>
        <option selected value="SpringerLink">SpringerLink</option>
        <option value="BMC">BioMed Central</option>
        <option value="BSL">BSL</option>
        <option value="sprcom">Springer.com</option>
      </select> <br />
</p>
<p className="Search-Statement">
      <label>
        Element:
        <input
          name="element"
          type="text"
          value={this.state.elementName}
          onChange={this.handleInputChange} />
      </label>

        <label>
          Attribute:
          <input
            name="attribute-selector"
            type="checkbox"
            checked={this.state.searchAttribute}
            onChange={this.handleInputChange} />
            <input
              name="attribute-name"
              type="text"
              value={this.state.attributeName}
              onChange={this.handleInputChange} />
        </label>
</p>
<h2>Return</h2>
<label>

<input
        name="count"
        type="radio"
        />Count  <br />
<input
        name="doi"
        type="radio"
        />DOI(s)  <br />
<input
        name="xml"
        type="radio"
        />Full XML  <br />
<input
        name="nodes"
        type="radio"
        />Specific Nodes <input
                              name="node-paths"
                              type="text"
                              />
        <br />
</label>
<input type="Submit" value="Search"/>
      </form>

      </div>
      </div>
    );
  }
}

export default App;
