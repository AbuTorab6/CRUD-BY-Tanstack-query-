import React, { Fragment, useState, useRef } from "react";

import { useCreateProduct } from "../APIServices/useCreateProduct";

const CreateProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const { isLoading, mutate } = useCreateProduct();

  const saveData = () => {
    const data = {
      productName: name,
      unitPrice: price,
    };
    console.log(name, price);
    mutate(data);
  };

  return (
    <div>
      <section className="createForm-section">
        {isLoading == true ? (
          <h1>Loading . . . </h1>
        ) : (
          <div className="row">
            <h2>Create Product</h2>
            <form>
              <div className="createForm-grid">
                <div className="col">
                  <label>Product Name</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="productName"
                    type="text"
                  />
                </div>
                <div className="col">
                  <label>Unit Price</label>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    className="unitPrice"
                    type="text"
                  />
                </div>
              </div>
            </form>

            <div className="createForm-btn">
              <button onClick={saveData}>Save</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default CreateProduct;
