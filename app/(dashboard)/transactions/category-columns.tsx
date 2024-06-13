import { useNewCategory } from "@/features/categories/hooks/use-new-category";
import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";

type Props = {
  category: string;
  categoryId: string;
};

export const CategoryColumn = ({ category, categoryId }: Props) => {
  const { onOpen: onOpenCategory } = useOpenCategory();
  const onClick = () => {
    if (categoryId) {
      onOpenCategory(categoryId);
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center cursor-pointer hover:underline",
        !category && "text-rose-500"
      )}
    >
      {!category && (
        <TriangleAlert className="text-rose-500 mr-2 size-4 shrink-0 " />
      )}
      {category || "Uncategorized"}
    </div>
  );
};
