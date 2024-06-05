import { InferRequestType, InferResponseType } from "hono/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.categories.$post>;
type RequestType = InferRequestType<typeof client.api.categories.$post>["json"];

export const useCreateCategory = () => {
  const query = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.categories.$post({ json });
      console.log(response);
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Category Created");
      query.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      toast.error("Fail to create category");
    },
  });
  return mutation;
};
