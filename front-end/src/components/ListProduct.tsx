import React, { Fragment, useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

import { useGetProduct } from "../APIServices/useGetProduct";
import { useDeleteProduct } from "../APIServices/useDeleteProduct";

const ListProduct = () => {
  const { data, isLoading } = useGetProduct();
  const { mutate, isSuccess } = useDeleteProduct();
  // const navigate = useNavigate();

  const deleteProduct = (id: string) => {
    mutate(id);
  };
  // if (isSuccess) {
  //   navigate("/");
  // }
  return (
    <div>
      <section className="listProduct-section">
        <div className="row">
          {isLoading ? (
            <h1>Loading . . .</h1>
          ) : (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Unit Price</th>

                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {data?.map(function (item, index) {
                  return (
                    <tr key={item._id}>
                      <td>{item.productName}</td>
                      <td>{item.unitPrice}</td>

                      <td>
                        <Button
                          onClick={() => deleteProduct(item._id)}
                          variant="danger"
                        >
                          {" "}
                          Delete{" "}
                        </Button>
                      </td>
                      <td>
                        <Button variant="success">
                          <Link
                            className="update-btn"
                            to={"/update/" + item._id}
                          >
                            Update
                          </Link>{" "}
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </div>
      </section>
    </div>
  );
};

export default ListProduct;
