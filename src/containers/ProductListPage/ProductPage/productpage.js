import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from "../../../actions";
import getParams from "../../../utils/getparams";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../../../components/UI/Card/card";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../../urlConfig";

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state?.product);
  const { page } = product;

  useEffect(() => {
    const params = getParams(props?.location?.search);
    const payload = {
      params,
    };
    dispatch(getProductPage(payload));
  }, [dispatch, props?.location?.search]);

  return (
    <div style={{ margin: "0 10px" }}>
      <h3>{page?.title}</h3>
      <Carousel renderThumbs={() => {}}>
        {page?.banners &&
          page?.banners?.map((banner, index) => (
            <Link key={index} style={{ display: "block" }} to={banner?.navigateTo}>
              <img src={generatePublicUrl(banner?.img)} alt="" />
            </Link>
          ))}
      </Carousel>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px 0",
        }}
      >
        {page?.products &&
          page?.products?.map((product, index) => (
            <Card key={index} style={{ width: "400px", height: "200px", margin: "5px" }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                }}
                src={generatePublicUrl(product?.img)}
                alt=""
              />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
