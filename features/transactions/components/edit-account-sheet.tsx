import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { AccountForm } from "./account-form";
import { insertAccountSchema } from "@/database/schema";
import { z } from "zod";
import { useOpenAccount } from "../hooks/use-open-account";
import { useGetAccountById } from "../api/use-get-transaction-by-id";
import { Loader2 } from "lucide-react";
import { useEditAccount } from "../api/use-edit-transaction";
import { useDeleteAccount } from "../api/use-delete-transaction";
import { useConfirm } from "@/hooks/use-confirm-box";

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

export function EditAccountSheet() {
  const { isOpen, onClose, id } = useOpenAccount();

  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this account"
  );

  const accountQuery = useGetAccountById(id);
  const editMutation = useEditAccount(id);
  const deleteAccount = useDeleteAccount(id);

  const isPending = editMutation.isPending || deleteAccount.isPending;

  const isLoading = accountQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    console.log(values);
    editMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const onDelete = async () => {
    const ok = await confirm();
    if (ok) {
      deleteAccount.mutate(undefined, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  const defaultValues = accountQuery.data
    ? {
        name: accountQuery.data.name,
      }
    : {
        name: "",
      };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4">
          <SheetHeader>
            <SheetTitle>Edit Account</SheetTitle>
            <SheetDescription>Edit an existing account</SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <AccountForm
              id={id}
              onSubmit={onSubmit}
              disabled={isPending}
              defaultValues={defaultValues}
              onDelete={onDelete}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
