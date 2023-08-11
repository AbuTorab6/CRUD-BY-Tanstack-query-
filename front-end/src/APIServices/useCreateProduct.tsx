import axios from "axios";
import cogoToast from "cogo-toast";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type Product = {
  productName: string;
  unitPrice: string;
};

const createProduct = async (data: Product) => {
  return axios
    .post("http://localhost:5000/insertProduct", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const useCreateProduct = () => {
  var navigate = useNavigate();
  return useMutation({
    mutationKey: ["post"],
    mutationFn: createProduct,
    onSuccess(data) {
      cogoToast.success(data);
      console.log("data", data);
      navigate("/");
    },
  });
};

export { useCreateProduct };
