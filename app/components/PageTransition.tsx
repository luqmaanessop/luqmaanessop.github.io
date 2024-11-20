"use client";
import { motion, useReducedMotion } from "framer-motion";
import React, { PropsWithChildren } from "react";

export function PageTransition({ children }: PropsWithChildren) {
  return useReducedMotion() ? (
    <main id="main-content">{children}</main>
  ) : (
    <motion.main
      id="main-content"
      className="flex-1 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 2.3,
      }}
    >
      {children}
    </motion.main>
  );
}
