import React from "react";
import "./productlistpage.css";
import getParams from "../../utils/getparams";
import Layout from "../../components/Layout/layout";
import ProductStore from "./ProductStore/productstore";
import ProductPage from "./ProductPage/productpage";

const ProductListPage = (props) => {
  const renderProduct = () => {
    const params = getParams(props?.location?.search);
    let content = null;
    switch (params?.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        content = null;
    }
    return content;
  };
  return (
    <>
      <Layout>{renderProduct()}</Layout>
    </>
  );
};

export default ProductListPage;
