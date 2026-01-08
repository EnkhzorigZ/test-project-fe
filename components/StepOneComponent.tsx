import { parseAsInteger, useQueryState } from "nuqs";
import { Button } from "./ui/button";
import InfoBox from "./InfoBox";
import { format } from "date-fns";

export default function StepOneComponent({
  registeredForm,
  currentStep,
  setCurrentStep,
}: {
  registeredForm: {
    firstName: string;
    lastName: string;
    register: string | null;
    phone: string;
  };
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [category, setCategory] = useQueryState("category", parseAsInteger);
  const [getDate, setGetDate] = useQueryState("date", { defaultValue: "" });
  const [time, setTime] = useQueryState("time", { defaultValue: "" });
  const [doctor, setDoctor] = useQueryState("doctor", parseAsInteger);
  const [name, setName] = useQueryState("name", { defaultValue: "" });

  let formattedDate = "";
  if (getDate) {
    const date = new Date(getDate);
    if (!isNaN(date.getTime())) {
      formattedDate = format(date, "yyyy-MM-dd");
    }
  }

  return (
    <div className="w-full grid gap-5">
      <InfoBox
        category={category}
        getDate={formattedDate?.toString() || ""}
        time={time}
        name={name}
        firstName={registeredForm?.firstName}
        lastName={registeredForm?.lastName}
        register={registeredForm?.register}
        phone={registeredForm?.phone}
      />
      <Button
        className="p-6 font-semibold cursor-pointer"
        disabled={
          !getDate ||
          !category ||
          !time ||
          !registeredForm.firstName ||
          !registeredForm.lastName ||
          !registeredForm.phone
        }
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        Үргэлжүүлэх
      </Button>
    </div>
  );
}
