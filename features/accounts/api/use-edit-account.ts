import { InferRequestType, InferResponseType } from "hono/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.accounts)[":id"]["$patch"]
>;
type RequestType = InferRequestType<
  (typeof client.api.accounts)[":id"]["$patch"]
>["json"];

export const useEditAccount = (id?: string) => {
  const query = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.accounts[":id"]["$patch"]({
        json,
        param: { id },
      });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Account Updated");
      query.invalidateQueries({ queryKey: ["account", { id }] });
      query.invalidateQueries({ queryKey: ["accounts"] });
      query.invalidateQueries({ queryKey: ["transactions"] });
      query.invalidateQueries({ queryKey: ["summary"] });
    },
    onError: () => {
      toast.error("Fail to create account");
    },
  });
  return mutation;
};
