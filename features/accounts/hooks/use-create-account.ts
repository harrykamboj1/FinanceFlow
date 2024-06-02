import { InferRequestType, InferResponseType } from "hono/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.accounts.$post>;
type RequestType = InferRequestType<typeof client.api.accounts.$post>["json"];

export const useCreateAccount = () => {
  const query = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.accounts.$post({ json });
      console.log(response);
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Account Created");
      query.invalidateQueries({ queryKey: ["accounts"] });
    },
    onError: () => {
      toast.error("Fail to create account");
    },
  });
  return mutation;
};
