"use client";

import { apps } from "@/lib/apps";
import BentoCell from "./BentoCell";
import ScrollReveal from "./ScrollReveal";
import SixteenToOneMark from "./marks/SixteenToOneMark";
import StockpotMark from "./marks/StockpotMark";
import BrambleMark from "./marks/BrambleMark";
import PicaMark from "./marks/PicaMark";
import RevisoMark from "./marks/RevisoMark";
import { ReactNode } from "react";

const markComponents: Record<string, ReactNode> = {
  SixteenToOneMark: <SixteenToOneMark size={40} className="transition-colors duration-400" />,
  StockpotMark: <StockpotMark size={40} className="transition-colors duration-400" />,
  BrambleMark: <BrambleMark size={40} className="transition-colors duration-400" />,
  PicaMark: <PicaMark size={40} className="transition-colors duration-400" />,
  RevisoMark: <RevisoMark size={40} className="transition-colors duration-400" />,
};

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {apps.map((app, index) => (
        <ScrollReveal
          key={app.slug}
          delay={index * 80}
          className={app.featured ? "md:col-span-2" : ""}
        >
          <BentoCell
            app={app}
            logomark={markComponents[app.mark]}
          />
        </ScrollReveal>
      ))}
    </div>
  );
}
