import React from "react";
import {
  SchedulerData,
  SchedulerItemClickData,
  SchedulerItemData,
  SchedulerProjectData
} from "@/types/global";

export type CalendarProps = {
  data: SchedulerData;
  topBarWidth: number;
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  tooltipComponent?: (data?: SchedulerItemData | null) => React.ReactNode;
};

export type StyledSpanProps = {
  position: "left" | "right";
};

export type ProjectsData = [projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[]];
