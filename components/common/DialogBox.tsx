"use client";

import { motion } from "framer-motion";
export default function DialogBox({
  State,
  setState,
  children,
}: {
  State: boolean;
  setState: any;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed z-50 inset-0 flex items-center justify-center p-6">
        <motion.div
          animate={{ opacity: [0, 1] }}
          exit={{ opacity: 0 }}
          onClick={() => setState(!State)}
          className="fixed inset-0 z-10 bg-black/40"
        ></motion.div>
        <motion.div
          className="relative z-20"
          animate={{
            scale: [0.9, 1],
            opacity: [0.5, 1],
          }}
          exit={{
            scale: 0.9,
            opacity: 0.5,
          }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
