"use client";

import { motion } from "framer-motion";
import React from "react";

interface StepRendererProps {
  stepIndex: number;
  currentStep: number;
  children: React.ReactNode;
}

export default function StepRenderer({
  stepIndex,
  currentStep,
  children,
}: StepRendererProps) {
  // Step not reached yet → render nothing
  if (currentStep < stepIndex) return null;

  // Step already completed → render static (NO animation)
  if (currentStep > stepIndex) {
    return <div>{children}</div>;
  }

  // Current step → animate ONCE
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
