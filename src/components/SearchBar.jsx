import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      placeHolder: "Type any character name"
    };
  }

  render() {
    const { displayError, searchByName } = this.props;

    return (
      <div className="master-search-bar">
        <div className="searchBar">
          <input type="text" className="input" onChange={this.handleChange} placeholder={this.state.placeHolder} />
          <span>
            <button className="go" onClick={() => searchByName(this.state.searchText)}>
              Go
            </button>
          </span>
        </div>
        {displayError ? <p className="display-error">Hihi, unknown this character is.</p> : null}
      </div>
    );
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleOnClick = e => {
    this.props.updateResearch(this.state.searchText);
  };
}

export default SearchBar;
