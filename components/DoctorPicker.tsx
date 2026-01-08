import { Card, CardContent, CardTitle } from "./ui/card";
import { doctorList } from "@/dummy/dummmy";
import DoctorCard from "./DoctorCard";

export default function DoctorPicker({
  setFormSubmitted,
}: {
  setFormSubmitted: (value: boolean) => void;
}) {
  return (
    <Card>
      <CardContent className="grid gap-3">
        <CardTitle className="font-bold text-desccolor dark:text-primary">
          Эмчүүд
        </CardTitle>
        <div className="flex flex-wrap gap-4 items-center justify-start">
          {doctorList?.map((doctor) => (
            <DoctorCard
              doctor={doctor}
              key={doctor.id}
              setFormSubmitted={setFormSubmitted}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
