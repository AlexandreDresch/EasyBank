import { transactionCategoryStyles } from "@/constants";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const { backgroundColor } =
    transactionCategoryStyles[
      category as keyof typeof transactionCategoryStyles
    ] || transactionCategoryStyles.default;

  return (
    <Badge
      variant="default"
      className={cn("category-badge", backgroundColor, "text-white")}
    >
      {category}
    </Badge>
  );
}
