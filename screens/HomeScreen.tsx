"use client";

import CategoryPicker from "@/components/CategoryPicker";
import ConfirmSection from "@/components/ConfirmSection";
import DoctorPicker from "@/components/DoctorPicker";
import RegisterForm from "@/components/RegisterForm";
import RowDatePicker from "@/components/RowDatePicker";
import TimePicker from "@/components/TimePicker";
import WarningText from "@/components/WarningText";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepRenderer from "@/components/StepRenderer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";

export default function HomeScreen() {
  const [step, setStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [registeredForm, setRegisteredForm] = useState({
    firstName: "",
    lastName: "",
    register: "",
    phone: "",
  });

  const confirmRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formSubmitted && confirmRef.current) {
      confirmRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [formSubmitted]);

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
    setStep(0);
  };

  const isAnyInfoAvailable =
    (category !== null && category !== undefined) ||
    (getDate && getDate !== "") ||
    (time && time !== "") ||
    (doctor !== null && doctor !== undefined) ||
    (name && name !== "");

  return (
    <>
      <WarningText setFormSubmitted={setFormSubmitted} setStep={setStep} />

      <div className="flex flex-col lg:flex-row px-4 gap-4 w-full">
        {/* HAVE TO DISABLE if formsubmitted is true */}
        <div
          className={`flex flex-col gap-4 w-full transition-opacity duration-300 ${
            formSubmitted ? "pointer-events-none opacity-50" : ""
          }`}
        >
          {/* STEP 1 — CATEGORY */}
          <StepRenderer currentStep={step} stepIndex={0}>
            <CategoryPicker
              setFormSubmitted={setFormSubmitted}
              setStep={setStep}
            />
          </StepRenderer>

          {/* STEP 2 — DATE */}
          <StepRenderer currentStep={step} stepIndex={1}>
            <RowDatePicker
              setFormSubmitted={setFormSubmitted}
              setStep={setStep}
            />
          </StepRenderer>

          {/* STEP 3 — TIME */}
          <StepRenderer currentStep={step} stepIndex={2}>
            <TimePicker setFormSubmitted={setFormSubmitted} setStep={setStep} />
          </StepRenderer>

          {/* STEP 4 — DOCTOR */}
          <StepRenderer currentStep={step} stepIndex={3}>
            <DoctorPicker
              setFormSubmitted={setFormSubmitted}
              setStep={setStep}
            />
          </StepRenderer>

          {/* STEP 5 — FORM */}
          <StepRenderer currentStep={step} stepIndex={4}>
            <RegisterForm
              setFormSubmitted={setFormSubmitted}
              setRegisteredForm={setRegisteredForm}
            />
          </StepRenderer>
        </div>

        {formSubmitted && (
          <div>
            <div className="flex justify-end md:hidden">
              {isAnyInfoAvailable && (
                <Button
                  variant={"destructive"}
                  className="px-10 py-5 mb-4"
                  onClick={async () => {
                    await handleClearInfo();
                  }}
                >
                  <X />
                  Мэдээлэл арилгах
                </Button>
              )}
            </div>
            <div
              ref={confirmRef}
              className="transition-all duration-500 opacity-100 sidebar-class"
            >
              <ConfirmSection registeredForm={registeredForm} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
