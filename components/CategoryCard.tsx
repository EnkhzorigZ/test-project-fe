import { Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { parseAsInteger, useQueryState } from "nuqs";

export default function CategoryCard({
  item: { id, name },
  index,
  setFormSubmitted,
  setStep,
}: {
  item: { id: number; name: string };
  index: number;
  setFormSubmitted: (value: boolean) => void;
  setStep: (value: number) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useQueryState(
    "category",
    parseAsInteger
  );

  const [categoryName, setCategoryName] = useQueryState("name", {
    defaultValue: "",
  });

  return (
    <div
      className={`${
        selectedCategory === id
          ? "bg-primary text-white"
          : "bg-categorycolor dark:bg-background dark:text-white"
      } : flex items-center justify-center px-4 py-2 rounded-[14px] cursor-pointer duration-200 hover:scale-105 hover:shadow-md font-medium text-desccolor`}
      onClick={() => {
        setSelectedCategory(id);
        setFormSubmitted(false);
        setCategoryName(name);
        setStep(1);
      }}
    >
      <div className="flex items-center gap-2">
        <Calendar size={16} />
        {name}
      </div>
    </div>
  );
}
