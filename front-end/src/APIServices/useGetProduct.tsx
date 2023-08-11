import axios from "axios";
import cogoToast from "cogo-toast";
import { useQuery } from "@tanstack/react-query";

type Product = {
  _id: string;
  productName: string;
  unitPrice: string;
  createdDate: string;
};

const getProduct = async (): Promise<Product[]> => {
  return axios
    .get("http://localhost:5000/getProduct")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      cogoToast.error(err.message);
    });
};

const useGetProduct = () => {
  return useQuery({ queryKey: ["get"], queryFn: getProduct });
};

export { useGetProduct };
