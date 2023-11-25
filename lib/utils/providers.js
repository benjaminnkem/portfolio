"use client";
import { create } from "zustand";
import { useEffect, useRef } from "react";

export const useStore = create((set) => ({
  storeRef: null,
  updateStoreRef: (ref) => set((state) => ({ ...state, homeRef: ref })),
}));

const Providers = ({ children }) => {
  const ref = useRef(null);

  const { updateStoreRef } = useStore();

  useEffect(() => updateStoreRef(ref), []);

  return <div ref={ref}>{children}</div>;
};

export default Providers;
