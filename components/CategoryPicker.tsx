import { Card, CardContent, CardTitle } from "./ui/card";
import { dummyJson } from "@/dummy/dummmy";
import CategoryCard from "./CategoryCard";
import { parseAsInteger, useQueryState } from "nuqs";
import { CategoryCombobox } from "./CategoryCombobox";

export default function CategoryPicker({
  setFormSubmitted,
}: {
  setFormSubmitted: (value: boolean) => void;
}) {
  const [category, setCategory] = useQueryState("category", parseAsInteger);

  return (
    <Card>
      <CardContent className="grid gap-4">
        <CardTitle className="font-bold text-desccolor dark:text-primary">
          Төрлүүд
        </CardTitle>

        {/* FOR DESKTOP */}
        <div className="hidden md:block">
          <div className="grid gap-2">
            <div className="flex flex-wrap gap-3">
              {dummyJson?.map((item, index) => (
                <CategoryCard
                  key={item.id}
                  item={item}
                  index={index}
                  setFormSubmitted={setFormSubmitted}
                />
              ))}
            </div>
          </div>
        </div>

        {/* FOR MOBILE */}

        <CategoryCombobox
          category={category}
          setCategory={setCategory}
          dummyJson={dummyJson}
        />
      </CardContent>
    </Card>
  );
}
