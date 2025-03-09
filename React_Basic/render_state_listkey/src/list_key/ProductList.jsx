import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          id: 1,
          name: "Iphone",
          avatar: "👿",
        },
        {
          id: 2,
          name: "Samsung",
          avatar: "😄",
        },
        {
          id: 3,
          name: "Oppo",
          avatar: "😠",
        },
      ],
    };
  }
  addProduct = () => {
    this.setState((prev) => ({
      productList: [...prev.productList, { id: 4, name: "Sony", avatar: "👮" }],
    }));
  };

  render() {
    return (
      <div>
        <h1>Product List</h1>
        <div className="product-list">
          <button onClick={this.addProduct}>Add product</button>
          {this.state.productList.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })}
        </div>
      </div>
    );
  }
}
