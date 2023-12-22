"use client";
import { create } from "zustand";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
