import axios from "axios";
import cogoToast from "cogo-toast";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const deleteProduct = async (id: string) => {
  return axios
    .delete("http://localhost:5000/deleteProduct/" + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      cogoToast.error(err.message);
      return err.message;
    });
};

const useDeleteProduct = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["delete"],
    mutationFn: deleteProduct,
    onSuccess(data) {
      client.invalidateQueries();
    },
  });
};
export { useDeleteProduct };
