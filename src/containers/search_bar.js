import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    term: ''
  };

  onInputChange = e => {
    console.log(e.target.value);
    this.setState({ term: e.target.value });
  };
  
  onFormSubmit = e => e.preventDefault();

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
