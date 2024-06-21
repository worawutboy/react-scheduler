import React from "react";
import { TooltipData } from "@/types/global";

export type TooltipProps = {
  tooltipData: TooltipData;
  zoom: number;
  component?: React.ReactNode;
};
