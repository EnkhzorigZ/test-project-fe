"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";
import { Card, CardContent } from "@/components/ui/card";
import StepOneComponent from "./StepOneComponent";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { steps } from "@/dummy/dummmy";

// --------------------
// Step components
// --------------------
type RegisteredForm = {
  firstName: string;
  lastName: string;
  register: string;
  phone: string;
};

function StepOne({
  registeredForm,
  currentStep,
  setCurrentStep,
}: {
  registeredForm: RegisteredForm;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <StepOneComponent
      registeredForm={registeredForm}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />
  );
}

function StepTwo({ registeredForm }: { registeredForm: RegisteredForm }) {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold text-lg">Step 2: Contact Info</h2>
      <p>Phone: {registeredForm.phone}</p>
      <p>Register: {registeredForm.register}</p>
    </div>
  );
}

function StepThree() {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold text-lg">Step 3: Confirmation</h2>
      <p>All information looks correct. Ready to submit!</p>
    </div>
  );
}

// --------------------
// Config
// --------------------

const stepComponents = [StepOne, StepTwo, StepThree];

// --------------------
// Main component
// --------------------
export default function ConfirmSection({
  registeredForm,
}: {
  registeredForm: RegisteredForm;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const StepComponent = stepComponents[currentStep - 1];

  return (
    <Card>
      <CardContent className="space-y-6">
        <div className="w-full flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep((s) => s - 1)}
            disabled={currentStep === 1}
            className="cursor-pointer w-10 h-10"
          >
            <MoveLeft className="" />
          </Button>
          <Image src={logo} alt="Step Image" width={92} height={92} />
          <Button
            onClick={() => setCurrentStep((s) => s + 1)}
            disabled={currentStep === steps.length}
            variant={"outline"}
            className="cursor-pointer"
          >
            <MoveRight className="" />
          </Button>
        </div>
        <Stepper
          value={currentStep}
          onValueChange={setCurrentStep}
          className="space-y-8"
        >
          {/* Step indicators */}
          <StepperNav>
            {steps.map((step) => (
              <StepperItem key={step.id} step={step.id}>
                <div className="flex items-center flex-col space-y-2">
                  <StepperTrigger>
                    <StepperIndicator>
                      {step.id < currentStep ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <span>{step.id}</span>
                      )}
                    </StepperIndicator>
                  </StepperTrigger>

                  {/* 👇 Step label */}
                  <div
                    className={cn(
                      "text-xs text-inactivecolor text-center max-w-18 leading-tight wrap-break-word font-bold ",

                      step.id === currentStep && "text-primary",
                      step.id < currentStep && "text-primary"
                    )}
                  >
                    {step.label}
                  </div>
                </div>
                {steps.length > step.id && (
                  <StepperSeparator className="group-data-[state=completed]/step:bg-green-500 mb-10" />
                )}
              </StepperItem>
            ))}
          </StepperNav>

          {/* Step content (ONLY active step) */}
          <StepperPanel>
            <StepperContent
              value={currentStep}
              className="w-full flex justify-center"
            >
              <StepComponent
                registeredForm={registeredForm}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            </StepperContent>
          </StepperPanel>
        </Stepper>
      </CardContent>
    </Card>
  );
}
