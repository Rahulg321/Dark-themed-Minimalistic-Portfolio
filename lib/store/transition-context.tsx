"use client";

import React, { useState } from "react";
import { createContext } from "react";
import gsap from "gsap";

interface TransitionContextType {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
}

export const TransitionContext = createContext<TransitionContextType>({
  timeline: gsap.timeline({ paused: true }),
  setTimeline: () => {},
});

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const [timeline, setTimeline] = useState(() => {
    return gsap.timeline({ paused: true });
  });
  return (
    <TransitionContext.Provider value={{ timeline, setTimeline }}>
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
