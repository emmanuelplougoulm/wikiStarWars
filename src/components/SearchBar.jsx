import React, { Component } from "react";

const INTERVAL = 250;

class SearchBar extends Component {
  timeoutId;

  state = {
    searchText: "",
    placeHolder: "Type any character name",
    intervalBeforeRequest: 1000,
    lockRequest: false
  }

  shouldComponentUpdate(newProps) {
    return this.props.displayError !== newProps.displayError;
  }

  render() {
    console.log("render search bar");
    const { displayError } = this.props;

    return (
      <div className="master-search-bar">
        <div className="searchBar">
          <input type="text" className="input" onChange={this.handleChange} placeholder={this.state.placeHolder} />
          {/* <span>
            <button className="go" onClick={() => searchByName(this.state.searchText)}>
              Go
            </button>
          </span> */}
        </div>
        {displayError ? (
          <div className="erro-ctnr">
            <p className="error-txt">Unknown this character is, try again</p>{" "}
            <img className="error-img" src="../assets/yoda.png" alt="yoda" width="80px" />
          </div>
        ) : null}
      </div>
    );
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });

    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      console.log("timeint out");

      this.props.searchByName(this.state.searchText);
    }, INTERVAL);
  };

  handleOnClick = e => {
    this.props.searchByName(this.state.searchText);
  };
}

export default SearchBar;
