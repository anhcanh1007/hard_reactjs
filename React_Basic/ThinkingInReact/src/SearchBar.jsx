import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    const { searchText, inStock } = this.props;
    return (
      <form>
        <input
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={(e) =>
            this.props.handleChange("searchText")(e.target.value)
          }
        />
        <div>
          <input
            type="checkbox"
            value={inStock}
            onChange={(e) =>
              this.props.handleChange("inStock")(e.target.checked)
            }
          />
          Only show products in stock
        </div>
      </form>
    );
  }
}

export default SearchBar;
