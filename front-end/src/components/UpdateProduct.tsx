import React, { Fragment, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  useUpdateProduct,
  useSearchProduct,
} from "../APIServices/useUpdateProduct";

const UpdateProduct = () => {
  const name = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

  var idFromUrl = useParams().id as string;
  const { mutate } = useUpdateProduct();
  const { data } = useSearchProduct(idFromUrl);

  const update = () => {
    const nameElement = name.current;
    const priceElement = price.current;
    if (nameElement && priceElement) {
      const dataObj = {
        id: idFromUrl,
        productName: nameElement.value,
        unitPrice: priceElement.value,
      };
      mutate(dataObj);
    }
  };

  return (
    <div>
      <section className="updateForm-section">
        <h2>Update Product</h2>
        <div className="row">
          <form>
            <div className="updateForm-grid">
              <div className="col">
                <label>Product Name</label>
                <input
                  defaultValue={data?.[0].productName}
                  ref={name}
                  className="productName"
                  type="text"
                />
              </div>
              <div className="col">
                <label>Unit Price</label>
                <input
                  defaultValue={data?.[0].unitPrice}
                  ref={price}
                  className="unitPrice"
                  type="text"
                />
              </div>
            </div>
          </form>

          <div className="updateForm-btn">
            <button onClick={update}>Update</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateProduct;
