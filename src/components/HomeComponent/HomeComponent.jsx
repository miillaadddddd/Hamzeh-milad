import React, { Fragment, useState } from "react";
import CustomButton from "../../utils/Custom/CustomButton/CustomButton";
import CustomFormikFormInput from "../../utils/Custom/CustomFormikFormInput/CustomFormikFormInput";
import CustomSlider from "../../utils/Custom/CustomSlider/CustomSlider";

import ProductCard from "../ProductCard/ProductCard";
// import CustomModal from "../../utils/Custom/CustomTable/CustomTable";

const HomeComponent = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [productModal, setProductModal] = useState(false);

  const handleShowProductModal = () => {
    setProductModal(true);
  };
  const handleCloseProductModal = () => {
    setProductModal(false);
  };

  let product = {
    imageUrl: "/assets/images/cardImage.jpeg",
    url: "/hamzeh",
    title: "نبات گیاهی متبرک مشهد با نی چوبی 1 کیلویی برکت هشتم",
    chamberTitle: "گالری سنگ و نقره شاپرک",
    chamberUrl: "/azizzadeh",
    rate: 10,
    commentCount: 102,
    discount: 25,
    price: 107000,
    discountNumber: 190000,
    sales: 52,
    city: "کرمان",
  };

  const products = [
    product,
    product,
    product,
    product,
    product,
    product,
    product,
  ];

  const columns = [
    {
      dataField: "title",
      text: "عنوان محصول",
      sort: true,
    },
    {
      dataField: "chamberTitle",
      text: "Chambertitle محصول",
    },
    {
      dataField: "discountNumber",
      text: "تخفیف محصول",
    },
    {
      dataField: "sales",
      text: "فروش محصول",
    },
    {
      dataField: "city",
      text: "شهر محصول",
    },
  ];

  return (
    <Fragment>
      <div className="container py-3">
        {/* <CustomFormikFormInput
          id="fullName"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="پست الکترونیک"
          placeholder="لطفا پست الکترونیک خود را وارد نمایید"
          validation={["email", "min:15", "max:30"]}
        />
        <br />
        <CustomFormikFormInput
          id="phoneNumber"
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="شماره موبایل"
          placeholder="لطفا شماره موبایل خود را وارد نمایید"
          validation={["phoneNumber"]}
        />
        <CustomButton className="btn-block mt-3" color="success" type="submit">
          حمزه
        </CustomButton> */}

        <hr />
        <CustomSlider
          data={[
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
            <ProductCard col="12" product={product} />,
          ]}
        />
        <hr />

        <div className="row">
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>

        <hr />

        {/* <CustomTable products={products} columns={columns} /> */}

        <button className="btn btn-success" onClick={handleShowProductModal}>
          show button
        </button>
        {/* <CustomModal isShow={productModal} closeModal={handleCloseProductModal}>
          <div>
            Hello
            :(((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))
          </div>
        </CustomModal> */}
      </div>
      {/* <div className="container">
        <div className="m-5 p-4 rounded bg-white">
          <CreateProduct />
        </div>
      </div> */}
    </Fragment>
  );
};

export default HomeComponent;
