import { useQueryState } from "nuqs";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function DoctorCard({
  doctor,
  setFormSubmitted,
  setStep,
}: {
  doctor: {
    id: number;
    doctor_name: string;
    image: string;
  };
  setFormSubmitted: (value: boolean) => void;
  setStep: (value: number) => void;
}) {
  const [selectedDoctor, setSelectedDoctor] = useQueryState("doctor", {
    defaultValue: "",
  });

  const isSelected = selectedDoctor === doctor.id.toString();

  const handleChange = () => {
    setSelectedDoctor(doctor.id.toString());
    setFormSubmitted(false);
    setStep(4);
  };

  const checkboxId = `doctor-checkbox-${doctor.id}`;

  return (
    <div
      key={doctor.id}
      className={`bg-categorycolor dark:bg-background text-titlecolor dark:text-white border rounded-lg py-2 m-0 transition-all duration-200 hover:shadow-md`}
    >
      <label
        htmlFor={checkboxId}
        className="flex items-center gap-4 px-3 m-0 cursor-pointer"
      >
        <div className="relative h-14 w-14 shrink-0 rounded-full overflow-hidden">
          <Image
            src={logo}
            alt={doctor.doctor_name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{doctor.doctor_name}</p>
          <p className="text-sm text-gray-500">Specialization info here</p>
        </div>
        <input
          id={checkboxId}
          type="checkbox"
          checked={isSelected}
          onChange={handleChange}
          className="w-5 h-5 accent-primary shrink-0"
        />
      </label>
    </div>
  );
}
