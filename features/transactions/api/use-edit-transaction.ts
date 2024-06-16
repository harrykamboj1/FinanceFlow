import { InferRequestType, InferResponseType } from "hono/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.transactions)[":id"]["$patch"]
>;
type RequestType = InferRequestType<
  (typeof client.api.transactions)[":id"]["$patch"]
>["json"];

export const useEditTransaction = (id?: string) => {
  const query = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.transactions[":id"]["$patch"]({
        json,
        param: { id },
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Transaction Updated");
      query.invalidateQueries({ queryKey: ["transaction", { id }] });
      query.invalidateQueries({ queryKey: ["transactions"] });
      query.invalidateQueries({ queryKey: ["summary"] });
    },
    onError: () => {
      toast.error("Fail to edit transaction");
    },
  });
  return mutation;
};
