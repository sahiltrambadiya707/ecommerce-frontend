import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
import { MaterialButton } from "../../../components/MaterialUI/materialui";
import { Link } from "react-router-dom";
import Card from "../../../components/UI/Card/card";
import "./productstore.css";
import Rating from "../../../components/UI/rating";
import Price from "../../../components/UI/price";

const ProductStore = (props) => {
  const product = useSelector((state) => state?.product);
  const priceRange = product?.priceRange;
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductBySlug(match?.params?.slug));
  }, [dispatch, props]);

  return (
    <>
      {Object.keys(product?.productsByPrice)?.map((key, index) => {
        return (
          <Card
            headerLeft={`${props?.match?.params?.slug} mobile under ${priceRange[key]}`}
            headerRight={
              <MaterialButton
                title={"VIEW ALL"}
                style={{
                  width: "96px",
                }}
                bgColor="#2874f0"
                fontSize="12px"
              />
            }
            style={{
              width: "calc(100% - 40px)",
              margin: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              {product?.productsByPrice[key]?.map((product) => (
                <Link
                  to={`${product?.slug}/${product?._id}/p`}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "black",
                  }}
                  className="productContainer"
                >
                  <div className="productImgContainer">
                    <img src={generatePublicUrl(product?.productPictures[0]?.img)} alt="img" />
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "10px 0" }}>{product?.name}</div>
                    <div>
                      <Rating value="4.3" />
                      &nbsp;&nbsp;
                      <span
                        style={{
                          color: "#777",
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                      >
                        (3353)
                      </span>
                    </div>
                    <Price value={product?.price} />
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ProductStore;
