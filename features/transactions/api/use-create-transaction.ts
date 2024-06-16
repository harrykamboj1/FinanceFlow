import { InferRequestType, InferResponseType } from "hono/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.transactions.$post>;
type RequestType = InferRequestType<
  typeof client.api.transactions.$post
>["json"];

export const useCreateTransaction = () => {
  const query = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.transactions.$post({ json });
      console.log(response);
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Transaction Added");
      query.invalidateQueries({ queryKey: ["transactions"] });
      query.invalidateQueries({ queryKey: ["summary"] });
    },
    onError: () => {
      toast.error("Fail to add transaction");
    },
  });
  return mutation;
};
