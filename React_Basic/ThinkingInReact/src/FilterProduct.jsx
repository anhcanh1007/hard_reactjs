import React, { Component } from "react";
import styles from "./FilterProduct.module.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const productListMock = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const fetchApi = () => Promise.resolve(productListMock);

export class FilterProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      searchText: "",
      inStock: false,
    };
  }

  componentDidMount() {
    fetchApi().then((res) => {
      this.setState({
        productList: res,
      });
    });
  }
  handleChange = (key) => (value) => {
    this.setState({
      [key]: value,
    });
  };
  render() {
    return (
      <div className={styles.filterProduct}>
        <SearchBar handleChange={this.handleChange} {...this.state} />
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <ProductTable {...this.state} />
        </table>
      </div>
    );
  }
}

export default FilterProduct;
