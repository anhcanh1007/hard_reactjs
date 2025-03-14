import React, { Component } from "react";
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

export class ProductTable extends Component {
  render() {
    const { productList, inStock, searchText } = this.props;
    let lastCategory = null;
    const rows = [];
    productList.forEach((productItem) => {
      if (inStock && !productItem.stocked) {
        return;
      }
      if (
        productItem.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1
      ) {
        return;
      }
      if (productItem.category !== lastCategory) {
        rows.push(
          <ProductCategory
            category={productItem.category}
            key={productItem.category}
          />
        );
      }
      rows.push(<ProductRow product={productItem} key={productItem.name} />);
      lastCategory = productItem.category;
    });
    return <tbody>{rows}</tbody>;
  }
}

export default ProductTable;
