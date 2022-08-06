import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout/layout";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { Breed, MaterialButton } from "../../components/MaterialUI/materialui";
import "./productdetailspage.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";

const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state?.product);
  const category = useSelector((state) => state?.category);

  useEffect(() => {
    const { productId } = props?.match?.params;

    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));
  }, [dispatch, props?.match?.params]);

  if (Object?.keys(product?.productDetails)?.length === 0) {
    return null;
  }
  return (
    <Layout>
      <div className="productDescriptionContainer">
        <div className="flexRow">
          <div className="verticalImageStack">
            {product?.productDetails?.productPictures?.map((thumb, index) => (
              <div className="thumbnail">
                <img src={generatePublicUrl(thumb?.img)} alt={thumb?.img} />
              </div>
            ))}
          </div>
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img
                src={generatePublicUrl(product?.productDetails?.productPictures[0]?.img)}
                alt="img"
              />
            </div>

            {/* action buttons */}
            <div className="flexRow" style={{ display: "flex" }}>
              <MaterialButton
                title="ADD TO CART"
                bgColor="#ff9f00"
                textColor="#ffffff"
                style={{
                  marginRight: "5px",
                }}
                icon={<IoMdCart />}
                onClick={() => {
                  const { _id, name, price } = product?.productDetails;
                  const img = product?.productDetails?.productPictures[0]?.img;
                  dispatch(addToCart({ _id, name, price }));
                  props?.history?.push(`/cart`);
                }}
              />
              <MaterialButton
                title="BUY NOW"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{
                  marginLeft: "5px",
                }}
                icon={<AiFillThunderbolt />}
                onClick={() => props?.history?.push(`/checkout`)}
              />
            </div>
          </div>
        </div>
        <div>
          {/* home > category > subCategory > productName */}
          {/* <Breed
            breed={}
            name={product.productDetails.name}
            breedIcon={<IoIosArrowForward />}
          > */}
          <div className="breed">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <IoIosArrowForward />
              </li>
              <li>
                <Link to="#">Mobiles</Link>
                <IoIosArrowForward />
              </li>
              <li>
                <Link to="#">Samsung</Link>
                <IoIosArrowForward />
              </li>
              <li>
                <Link to="#">{product?.productDetails?.name}</Link>
              </li>
            </ul>
          </div>

          {/* </Breed> */}
          {/* product description */}
          <div className="productDetails">
            <p className="productTitle">{product?.productDetails?.name}</p>
            <div>
              <span className="ratingCount">
                4.3 <IoIosStar />
              </span>
              <span className="ratingNumbersReviews">72,234 Ratings & 8,140 Reviews</span>
            </div>
            <div className="extraOffer">
              Extra <BiRupee />
              4500 off{" "}
            </div>
            <div className="flexRow priceContainer">
              <span className="price">
                <BiRupee />
                {product?.productDetails?.price}
              </span>
              <span className="discount" style={{ margin: "0 10px" }}>
                22% off
              </span>
              {/* <span>i</span> */}
            </div>
            <div>
              <p
                style={{
                  color: "#212121",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Available Offers
              </p>
              <p style={{ display: "flex" }}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  Description
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#212121",
                  }}
                >
                  {product?.productDetails?.description}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;
