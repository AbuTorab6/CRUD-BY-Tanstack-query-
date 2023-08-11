import axios from "axios";
import cogoToast from "cogo-toast";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type Product = {
  id: string | undefined;
  productName: string;
  unitPrice: string;
};

type Search = {
  _id: string;
  productName: string;
  unitPrice: string;
  createdDate: string;
};

const updateProduct = async (data: Product) => {
  const updateData = {
    productName: data.productName,
    unitPrice: data.unitPrice,
  };
  return axios
    .post("http://localhost:5000/updateProduct/" + data.id, updateData)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const useUpdateProduct = () => {
  var navigate = useNavigate();
  return useMutation({
    mutationKey: ["update"],
    mutationFn: updateProduct,
    onSuccess(data) {
      cogoToast.success(data);
      console.log("data", data);
      navigate("/");
    },
  });
};

const searchProduct = async (id: string): Promise<Search[]> => {
  return axios
    .get("http://localhost:5000/getProduct/" + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      cogoToast.error(err.message);
      return err.message;
    });
};

const useSearchProduct = (id: string) => {
  return useQuery({
    queryKey: ["search", id],
    queryFn: () => searchProduct(id),
  });
};
export { useUpdateProduct, useSearchProduct };
