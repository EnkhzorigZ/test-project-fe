"use client";

import { Info, X } from "lucide-react";
import { Button } from "./ui/button";
import { parseAsInteger, useQueryState } from "nuqs";

export default function WarningText({
  setFormSubmitted,
}: {
  setFormSubmitted: (value: boolean) => void;
}) {
  const [category, setCategory] = useQueryState("category", parseAsInteger);
  const [getDate, setGetDate] = useQueryState("date", { defaultValue: "" });
  const [time, setTime] = useQueryState("time", { defaultValue: "" });
  const [doctor, setDoctor] = useQueryState("doctor", parseAsInteger);
  const [name, setName] = useQueryState("name", { defaultValue: "" });

  const handleClearInfo = async () => {
    setCategory(null);
    setGetDate("");
    setTime("");
    setDoctor(null);
    setName("");
    setFormSubmitted(false);
  };

  const isAnyInfoAvailable =
    (category !== null && category !== undefined) ||
    (getDate && getDate !== "") ||
    (time && time !== "") ||
    (doctor !== null && doctor !== undefined) ||
    (name && name !== "");

  return (
    <div className="px-4 w-full flex flex-wrap gap-2 items-center justify-between">
      <div className="bg-customred flex gap-4 px-4 py-2 rounded-md text-white items-center font-medium">
        <div>
          <Info size={24} />
        </div>
        <p>
          Та захиалга цуцлах бол үзүүлхээр сонгосон цагаас нэг цагийн өмнө
          <span className="font-bold"> 77551010 </span> дугаарт холбогдож өөрийн
          захиалсан цагаа цуцлуулах боломжтой.
        </p>
      </div>

      {isAnyInfoAvailable && (
        <Button
          variant={"destructive"}
          className="px-10 py-5"
          onClick={async () => {
            await handleClearInfo();
          }}
        >
          <X />
          Мэдээлэл арилгах
        </Button>
      )}
    </div>
  );
}
