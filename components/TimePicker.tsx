import { Card, CardContent, CardTitle } from "./ui/card";
import { timeList } from "@/dummy/dummmy";
import { Button } from "./ui/button";
import { useQueryState } from "nuqs";

export default function TimePicker({
  setFormSubmitted,
}: {
  setFormSubmitted: (value: boolean) => void;
}) {
  const [selectedTime, setSelectedTime] = useQueryState("time", {
    parse: (value) => value || null,
    serialize: (value) => value || "",
    defaultValue: null,
  });

  return (
    <Card>
      <CardContent className="grid gap-3">
        <CardTitle className="font-bold text-desccolor dark:text-primary">
          Цаг сонгох
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          {timeList?.map((item) => (
            <div key={item.id}>
              <Button
                variant={selectedTime === item.time ? "default" : "bluebutton"}
                className="p-5 w-20 cursor-pointer transition-all duration-200 hover:shadow-md"
                onClick={() => {
                  setFormSubmitted(false);
                  setSelectedTime(item.time);
                }}
              >
                {item.time}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
