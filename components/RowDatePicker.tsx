"use client";

import { useMemo } from "react";
import { addDays, format, startOfDay } from "date-fns";
import { mn } from "date-fns/locale";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useQueryState } from "nuqs";

export default function RowDatePicker({
  setFormSubmitted,
}: {
  setFormSubmitted: (value: boolean) => void;
}) {
  const today = startOfDay(new Date());

  // only month is needed
  const [selectedDate, setSelectedDate] = useQueryState("date", {
    parse: (value) =>
      value ? startOfDay(new Date(value + "T00:00:00")) : today,
    serialize: (value) => format(value, "yyyy-MM-dd"),
    defaultValue: today,
  });

  /** generate 30 days for month */
  const dates = useMemo(
    () => Array.from({ length: 14 }, (_, i) => addDays(today, i)),
    [today]
  );

  return (
    <Card>
      <CardContent className="grid gap-4">
        <CardTitle className="font-bold text-desccolor dark:text-primary">
          Үзлэгийн өдөр сонгох
        </CardTitle>

        {/* Dates */}
        <div className="flex gap-4 overflow-x-auto pb-1">
          {dates.map((date) => {
            const isToday =
              format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");
            const isSelected =
              format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");

            return (
              <Button
                key={date.toISOString()}
                variant={isSelected ? "default" : "bluebutton"}
                className={clsx(
                  "flex flex-col items-center justify-between min-w-18 h-24 cursor-pointer py-3 transition-all duration-200 hover:shadow-md",
                  isToday && !isSelected && "border-primary cursor-pointer "
                )}
                onClick={() => {
                  setFormSubmitted(false);
                  setSelectedDate(date);
                }}
              >
                {/* TOP */}
                <span
                  className={clsx(
                    "text-xs",
                    isSelected ? "text-white" : "text-desccolor dark:text-white"
                  )}
                >
                  {format(date, "EEEE", { locale: mn })
                    ?.charAt(0)
                    ?.toUpperCase() +
                    format(date, "EEEE", { locale: mn })?.slice(1)}
                </span>

                {/* MIDDLE */}
                <span
                  className={clsx(
                    "font-semibold text-lg",
                    isSelected ? "text-white" : "text-desccolor dark:text-white"
                  )}
                >
                  {format(date, "dd")}
                </span>

                {/* BOTTOM */}
                <span
                  className={clsx(
                    "text-xs font-semibold",
                    isSelected ? "text-white" : "text-desccolor dark:text-white"
                  )}
                >
                  {format(date, "yyyy.MM.dd")}
                </span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
