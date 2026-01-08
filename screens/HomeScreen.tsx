"use client";

import CategoryPicker from "@/components/CategoryPicker";
import ConfirmSection from "@/components/ConfirmSection";
import DoctorPicker from "@/components/DoctorPicker";
import RegisterForm from "@/components/RegisterForm";
import RowDatePicker from "@/components/RowDatePicker";
import TimePicker from "@/components/TimePicker";
import WarningText from "@/components/WarningText";
import { useState } from "react";

export default function HomeScreen() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const [registeredForm, setRegisteredForm] = useState({
    firstName: "",
    lastName: "",
    register: "",
    phone: "",
  });

  return (
    <>
      <WarningText setFormSubmitted={setFormSubmitted} />
      <div className="flex flex-col lg:flex-row px-4 gap-4 w-full">
        <div className="flex flex-col gap-4">
          {/* CATEGORY */}
          <CategoryPicker setFormSubmitted={setFormSubmitted} />

          {/* DATES */}
          <RowDatePicker setFormSubmitted={setFormSubmitted} />

          {/* TIMES */}
          <TimePicker setFormSubmitted={setFormSubmitted} />

          {/* Doctors */}
          <DoctorPicker setFormSubmitted={setFormSubmitted} />

          {/* FORM */}
          <RegisterForm
            setFormSubmitted={setFormSubmitted}
            setRegisteredForm={setRegisteredForm}
          />
        </div>

        {formSubmitted && (
          <div className="sidebar-class">
            <ConfirmSection registeredForm={registeredForm} />
          </div>
        )}
      </div>
    </>
  );
}
